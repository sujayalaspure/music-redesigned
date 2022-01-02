import React, { useEffect, useRef, useState } from "react";
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
import { calculateTime } from "../../utils/helperFunctions";
const Player = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  const PlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    prevValue ? audioPlayer.current.pause() : audioPlayer.current.play();
  };

  useEffect(() => {
    var audio = document.getElementById("track");
    audio.addEventListener(
      "timeupdate",
      function () {
        var currentTimeMs = audio.currentTime;
        setCurrenttime(currentTimeMs);
      },
      false
    );
  }, []);

  const NextPlay = () => {};

  const PrevPlay = () => {};

  const Mute = () => {};

  return (
    <PlayerWrapper>
      <ProgressBar progress={(currentTime * 100) / duration} />
      <audio
        id="track"
        src={currentSong.song}
        preload="metadata"
        ref={audioPlayer}
      />
      <div className="conent">
        <div className="first">
          <MusicThumbnail src={currentSong.imgSrc} />
          <MusicInfo>
            <Title>{currentSong.songName}</Title>
            <Artist>{currentSong.artist}</Artist>
          </MusicInfo>
        </div>
        <PlayerControls>
          <IconButton onClick={PrevPlay} Icon={SkipPrevious} size={28} />
          <IconButton
            onClick={PlayPause}
            Icon={isPlaying ? PauseCircleFilled : PlayCircleFilled}
            size={48}
          />

          <IconButton onClick={NextPlay} Icon={SkipNext} size={28} />
        </PlayerControls>
        <OtherInfo>
          <span>
            {calculateTime(currentTime)}/{" "}
            {duration != "Infinity" && !isNaN(duration)
              ? calculateTime(duration)
              : "00:00"}
          </span>
          <IconButton onClick={Mute} Icon={VolumeUp} size={24} />
        </OtherInfo>
      </div>
    </PlayerWrapper>
  );
};

export default Player;
