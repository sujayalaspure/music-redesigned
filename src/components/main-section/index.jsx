import React, { useState } from "react";
import {
  MainContentWrapper,
  MusicContainer,
  MusicSection,
  VideoContainer,
  Divider,
} from "./style";
import Banner from "../Banner";
import MusicItem from "./music-item";
import HeadingAndCTA from "../HeadingAndCTA";
import VideoItem from "./video-item";
import Player from "../player";
import { Songs } from "../../songs";

const MainSection = () => {
  // const [songs, setsongs] = useState(Songs);
  const [currentSong, setCurrentSong] = useState({});

  // useEffect(() => {
  //   if (!isFetching) {
  //     const channels = radioChannels?.data
  //       .filter((channel) => channel.https_url.length > 0)
  //       .map((channel) => ({
  //         id: channel.id,
  //         favourite: false,
  //         songName: channel.name,
  //         artist: channel.country,
  //         song: channel.https_url.find(
  //           (url) => url.last_test_result === "worked"
  //         )?.url,
  //         imgSrc: channel.logo.s88x88,
  //       }));
  //     console.log("LOG> [main-section/index.jsx:44] channels --->", channels);
  //     setsongs(channels);
  //     setCurrentSong(channels[0]);
  //   }
  // }, [isFetching, radioChannels]);

  return (
    <MainContentWrapper>
      <Banner />
      <MusicSection>
        <MusicContainer>
          <HeadingAndCTA title={"Musics"} />

          {Songs.map((song) => {
            return (
              <React.Fragment key={song.id}>
                <MusicItem
                  playing={currentSong.id === song.id}
                  setCurrentSong={setCurrentSong}
                  song={song}
                />
                <Divider />
              </React.Fragment>
            );
          })}
        </MusicContainer>
        <VideoContainer>
          <HeadingAndCTA title={"Videos"} />
          <VideoItem />
          <VideoItem />
        </VideoContainer>
      </MusicSection>
      <div className="player">
        <Player currentSong={currentSong} />
      </div>
    </MainContentWrapper>
  );
};

export default MainSection;
