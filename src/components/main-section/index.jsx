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
  const [songs, setsongs] = useState(Songs);
  const [currentSong, setCurrentSong] = useState({
    id: 1,
    favourite: false,
    songName: "Bella Ciao",
    artist: "El Profesor",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbellaciao.mp3?alt=media&token=e1dd8233-3521-4574-8957-d51af9a5db5c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmoneyheist.jpg?alt=media&token=32baf3d7-0ab5-47d5-ba48-554792cea117",
  });

  return (
    <MainContentWrapper>
      <Banner />
      <MusicSection>
        <MusicContainer>
          <HeadingAndCTA title={"Musics"} />

          {songs.map((song) => {
            return (
              <React.Fragment key={song.id}>
                <MusicItem
                  playing={currentSong.id == song.id}
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
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </VideoContainer>
      </MusicSection>
      <Player currentSong={currentSong} />
    </MainContentWrapper>
  );
};

export default MainSection;
