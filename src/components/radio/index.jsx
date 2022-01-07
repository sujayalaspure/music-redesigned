import React, { useEffect, useState } from "react";

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
import { useGetRadioBrowserQuery } from "../../services/radioBrowserApi";

const imgSrc =
  "https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80";

const defaultThumbnail =
  "https://store-images.s-microsoft.com/image/apps.51698.13510798886370928.9f680c41-71a4-49b5-938e-ad60e8f2bf5e.75a688ca-b4d6-4cd5-924e-74e6944bbf54?mode=scale&q=90&h=300&w=300";

const Radio = () => {
  const { data: radioBrowser, isFetching } = useGetRadioBrowserQuery();

  const [currentSong, setCurrentSong] = useState({});
  const [genereListData, setGenereData] = useState(Genre?.data);
  const [selectedGen, setSelectedGen] = useState(null);
  const [filteredChannels, setFilteredChannels] = useState(radioBrowser);
  const [currentRegion, setCurrentRegion] = useState("");

  const [channelByRegion, setChannelByRegion] = useState([]);

  useEffect(() => {
    if (!isFetching) {
      setFilteredChannels(radioBrowser);
    }
  }, [isFetching, radioBrowser]);

  const handlSearch = (e) => {
    const { value } = e.target;

    if (value.length > 0) {
      const filtered = radioBrowser.filter((item) => {
        return (
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.language.toLowerCase().includes(value.toLowerCase())
        );
      });
      setFilteredChannels(filtered);
    }
  };

  const playRadio = (channel) => {
    if (channel.stationuuid !== currentSong.id) {
      const temp = {
        id: channel.stationuuid,
        favourite: false,
        songName: channel.name,
        artist: channel.language,
        song: channel.url,
        imgSrc: channel.favicon || defaultThumbnail,
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
            <h2>All Channels</h2>
            <SearchBox
              placeholder={"Search by Name, Language"}
              handleInput={handlSearch}
            />
          </Heading>
          <ChannelListSection>
            {isFetching && <div>Loading...</div>}
            {filteredChannels?.map((channel) => (
              <GlobalChannelItem
                key={channel.stationuuid}
                onClick={() => playRadio(channel)}
              >
                <img
                  className="thumbnail"
                  src={channel.favicon || defaultThumbnail}
                  alt=""
                />
                <h4 className="title">{channel.name.slice(0, 16)}</h4>
                <p className="desc">{channel.language}</p>
              </GlobalChannelItem>
            ))}
          </ChannelListSection>
        </ChannelSection>
        <RightSection>
          <SectionBox>
            <Heading>
              Local Channels
              <SearchAndList
                optionList={radioBrowser?.map((opt) => ({
                  ...opt,
                  option: opt.state,
                }))}
                placeholder={"Search By Region"}
                onOptionClick={(option) => setCurrentRegion(option)}
              />
            </Heading>
          </SectionBox>
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
