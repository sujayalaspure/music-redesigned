import React from "react";
import {
  MoreVert,
  Favorite,
  FavoriteBorder,
} from "@styled-icons/material-rounded";

import {
  MusicItemContainer,
  MusicTitle,
  MusicThumbnail,
  MusicArtist,
  MusicDuration,
  CTA,
} from "./style";
import IconButton from "../../IconButton";

const MusicItem = ({ playing, song, setCurrentSong }) => {
  return (
    <MusicItemContainer
      available={song.song ? true : false}
      playing={playing}
      onClick={() => {
        song.song && setCurrentSong(song);
      }}
    >
      <div className="first">
        <MusicThumbnail src={song.imgSrc} />
        <MusicTitle>{song.songName}</MusicTitle>
      </div>
      <MusicArtist>{song.artist} </MusicArtist>
      <div className="last">
        <MusicDuration>3:20</MusicDuration>
        <CTA>
          <FavoriteBorder size={24} />
        </CTA>
        <IconButton Icon={MoreVert} size={24} />
      </div>
    </MusicItemContainer>
  );
};

export default MusicItem;
