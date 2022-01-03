import React, { useState } from "react";

import {
  useGetCountriesQuery,
  useGetRadioChannelsQuery,
} from "../../services/radioApi";
import Banner from "../Banner";
import Player from "../player";
import {
  ChannelSection,
  GlobalChannelItem,
  Heading,
  MainContentWrapper,
  MiddleSection,
  RightSection,
  SectionBox,
  ChannelListSection,
} from "./style";
import SearchAndList from "../SearchAndList";
import GenreSection from "./GenreSection";
import { Genre } from "./tempData";
import SearchBox from "../SearchBox";

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
  } = useGetRadioChannelsQuery(
    {
      country: selectedCountry.id,
    },
    { skip: false }
  );
  // const { data: genereData } = useGetGenresQuery(null, { skip: true });
  const { data: countryList } = useGetCountriesQuery(null, { skip: false });
  const [currentSong, setCurrentSong] = useState({});
  const [genereListData, setGenereData] = useState(Genre?.data);
  const [selectedGen, setSelectedGen] = useState(null);
  const selectCountry = (country) => {
    setSelectedCountry(country);
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

  const handleGenFilter = (e) => {
    const { value } = e.target;
    if (value) {
      const filteredOptions = Genre?.data.filter((option) =>
        option.name.toLowerCase().includes(value.toLowerCase())
      );
      setGenereData(filteredOptions);
    } else {
      //  setshowList(false);
    }
  };
  return (
    <MainContentWrapper>
      <Banner imgSrc={imgSrc} />

      <MiddleSection>
        <ChannelSection>
          <Heading>
            <h2>Channels - {selectedCountry.country}</h2>
            <SearchAndList
              optionList={countryList?.data.map((opt) => ({
                ...opt,
                option: opt.country,
              }))}
              placeholder={"Search By Country"}
              onOptionClick={selectCountry}
            />
          </Heading>
          <ChannelListSection>
            {error && (
              <div>Error fetching channels. Please refresh the page</div>
            )}
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
          <SectionBox>
            <Heading>
              <h2>Genre</h2>
              <SearchBox
                placeholder={"Search Genre"}
                handleInput={handleGenFilter}
              />
            </Heading>
            <GenreSection
              selectedGen={selectedGen}
              onClick={(gen) => {
                console.log("LOG> [radio/index.jsx:132] gen --->", gen);
                setSelectedGen(gen);
              }}
              genere={genereListData}
            />
          </SectionBox>
        </RightSection>
      </MiddleSection>

      <div className="player">
        <Player currentSong={currentSong} />
      </div>
    </MainContentWrapper>
  );
};

export default Radio;
