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
  MusicDescription,
  MusicArtist,
  MusicDuration,
  CTA,
} from "./style";

const MusicItem = () => {
  return (
    <MusicItemContainer>
      <div className="first">
        <MusicThumbnail src="https://i.ytimg.com/vi/QH2-TGUlwu4/default.jpg" />
        <MusicTitle>Take My Breath</MusicTitle>
      </div>
      <MusicArtist> A. R. Rehman </MusicArtist>
      <div className="last">
        <MusicDuration>3:20</MusicDuration>
        <CTA>
          <FavoriteBorder size={24} />
        </CTA>
        <CTA more>
          <MoreVert size={24} />
        </CTA>
      </div>
    </MusicItemContainer>
  );
};

export default MusicItem;
