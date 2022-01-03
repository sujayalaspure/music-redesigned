import { MoreVert } from "@styled-icons/material-rounded";
import React from "react";
import {
  Container,
  CTA,
  VideoSource,
  VideoThumbnail,
  VideoTitle,
} from "./style";
const ratio = 6;
const VideoItem = () => {
  return (
    <Container>
      <VideoThumbnail
        height={9 * ratio}
        width={16 * ratio}
        src="https://i.ytimg.com/vi/uPD0QOGTmMI/maxresdefault.jpg"
      />
      <div className="content">
        <VideoTitle>Die For you</VideoTitle>
        <VideoSource>The Weekend</VideoSource>
      </div>
      <CTA>
        <MoreVert size={24} />
      </CTA>
    </Container>
  );
};

export default VideoItem;
