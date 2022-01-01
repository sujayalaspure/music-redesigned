import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  PauseCircleFilled,
  PlayCircleFilled,
  SkipNext,
  SkipPrevious,
  VolumeOff,
  VolumeUp,
} from "@styled-icons/material-rounded";
import {
  MusicThumbnail,
  PlayerWrapper,
  MusicInfo,
  Title,
  Artist,
  PlayerControls,
  OtherInfo,
} from "./style";
import ProgressBar from "./ProgressBar";
import IconButton from "../IconButton";
import { toHHMMSS } from "../../utils/helperFunctions";
const Player = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    currentTime: 0,
    duration: 0,
    percentage: 0,
  });

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation

  const audio = useMemo(() => new Audio(currentSong.url), [currentSong.id]);

  const updateTime = () => {
    const currentTime = Math.floor(audio.currentTime);
    const duration = Math.floor(audio.duration);

    setCurrentTime({
      currentTime,
      duration,
      percentage: Math.floor((currentTime * 100) / duration),
    });
  };

  // useEffect(() => {
  //   setAudio(new Audio(currentSong.song));
  // }, [currentSong.id]);

  useEffect(() => {
    const play = () => {
      audio.currentTime = currentTime.currentTime;
      audio.play();
    };
    isPlaying ? play() : audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    audio.addEventListener(
      "timeupdate",
      (event) => {
        updateTime();
      },
      false
    );
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.addEventListener(
        "timeupdate",
        (event) => {
          updateTime();
        },
        false
      );
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const NextPlay = () => {};

  const PrevPlay = () => {};

  const Mute = () => {};

  return (
    <PlayerWrapper>
      <ProgressBar progress={currentTime.percentage} />
      <div className="conent">
        <audio src={currentSong.url} preload="metadata" ref={audioPlayer}>
          <div className="first">
            <MusicThumbnail src={currentSong.imgSrc} />
            <MusicInfo>
              <Title>{currentSong.songName}</Title>
              <Artist>{currentSong.artist}</Artist>
            </MusicInfo>
          </div>
          <PlayerControls>
            <IconButton onClick={PrevPlay} Icon={SkipPrevious} size={28} />
            {isPlaying ? (
              <IconButton
                onClick={PlayPause}
                Icon={PauseCircleFilled}
                size={48}
              />
            ) : (
              <IconButton
                onClick={PlayPause}
                Icon={PlayCircleFilled}
                size={48}
              />
            )}
            {/* <IconButton onClick={PlayPause} Icon={PlayCircleFilled} size={48} /> */}
            <IconButton onClick={NextPlay} Icon={SkipNext} size={28} />
          </PlayerControls>
          <OtherInfo>
            <span>
              {toHHMMSS(currentTime.currentTime)}/{" "}
              {toHHMMSS(currentTime.duration)}
            </span>
            <IconButton onClick={Mute} Icon={VolumeUp} size={24} />
          </OtherInfo>
        </audio>
      </div>
    </PlayerWrapper>
  );
};

export default Player;
