import React from "react";
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

const MainSection = () => {
  return (
    <MainContentWrapper>
      <Banner />
      <MusicSection>
        <MusicContainer>
          <HeadingAndCTA title={"Musics"} />
          <MusicItem />
          <Divider />
          <MusicItem />
          <Divider />
          <MusicItem />
          <Divider />
          <MusicItem />
        </MusicContainer>
        <VideoContainer>
          <HeadingAndCTA title={"Videos"} />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </VideoContainer>
      </MusicSection>
      <Player />
    </MainContentWrapper>
  );
};

export default MainSection;
