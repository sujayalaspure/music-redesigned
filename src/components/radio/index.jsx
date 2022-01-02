import React, { useState } from "react";

import { Search } from "@styled-icons/material-rounded";
import {
  useGetCountriesQuery,
  useGetRadioChannelsQuery,
} from "../../services/radioApi";
import Banner from "../Banner";
import IconButton from "../IconButton";
import Player from "../player";
import {
  ChannelSection,
  GlobalChannelItem,
  Heading,
  MainContentWrapper,
  MiddleSection,
  RightSection,
  SectionBox,
  CountryListWrapper,
  ChannelListSection,
} from "./style";
import { useRef } from "react";

const imgSrc =
  "https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80";

const Radio = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    id: 14,
    country: "India",
  });

  const {
    data: radioChannels,
    error,
    isLoading,
  } = useGetRadioChannelsQuery({
    country: selectedCountry.id,
  });
  const { data: countryList } = useGetCountriesQuery();
  const [currentSong, setCurrentSong] = useState({});
  const [countries, setcountries] = useState([]);
  const [showCountry, setShowCountry] = useState(false);

  const inputRef = useRef();
  const searchCountry = (e) => {
    const { value } = e.target;
    if (value) {
      setShowCountry(true);
      const filteredCountries = countryList?.data.filter((country) =>
        country.country.toLowerCase().includes(value.toLowerCase())
      );
      setcountries(filteredCountries);
    } else {
      setShowCountry(false);
    }
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setShowCountry(false);
    inputRef.current.value = country.country;
  };

  const playRadio = (channel) => {
    if (channel.id !== currentSong.id) {
      const temp = {
        id: channel.id,
        favourite: false,
        songName: channel.name,
        artist: channel.country,
        song: channel.https_url.find((url) => url.last_test_result === "worked")
          ?.url,
        imgSrc: channel.logo.s88x88,
      };
      setCurrentSong(temp);
    }
  };
  return (
    <MainContentWrapper>
      <Banner imgSrc={imgSrc} />

      <MiddleSection>
        <ChannelSection>
          {showCountry && (
            <CountryListWrapper>
              {console.log(countries)}
              {countries?.map(({ country, id }) => (
                <li
                  onClick={() => {
                    selectCountry({ country, id });
                  }}
                  key={id}
                >
                  {country}
                </li>
              ))}
            </CountryListWrapper>
          )}
          <Heading>
            <h2>Channels - {selectedCountry.country}</h2>
            <div className="searchbar">
              <input
                ref={inputRef}
                onChange={searchCountry}
                placeholder="Search By Country"
              />
              <Search size={24} />
            </div>
          </Heading>
          <ChannelListSection>
            {error && <div>Error fetching channels</div>}
            {isLoading && <div>Loading...</div>}
            {radioChannels?.data
              ?.filter((channel) => channel.https_url.length > 0)
              .map((channel) => (
                <GlobalChannelItem
                  key={channel.id}
                  onClick={() => playRadio(channel)}
                >
                  <img
                    className="thumbnail"
                    src={channel.logo.original}
                    alt=""
                  />
                  <h4 className="title">{channel.name.slice(0, 16)}</h4>
                  <p className="desc">{channel.country}</p>
                </GlobalChannelItem>
              ))}
          </ChannelListSection>
        </ChannelSection>
        <RightSection>
          <SectionBox>Local Channels</SectionBox>
          <SectionBox>Genres</SectionBox>
        </RightSection>
      </MiddleSection>

      <div className="player">
        <Player currentSong={currentSong} />
      </div>
    </MainContentWrapper>
  );
};

export default Radio;
