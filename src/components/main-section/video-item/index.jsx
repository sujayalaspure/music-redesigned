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
        src="https://lh3.googleusercontent.com/jr0qPex-GejCU3ZIOmVYgNxGV3qqWaSpd_lJxeYhLMECEj66QymsTpysvefmNUgegZhfwvlVZ4auZTtMfDy6TiwSJbIVlWmO46tnPdSN"
      />
      <div className="content">
        <VideoTitle>Video</VideoTitle>
        <VideoSource>Sara Ali</VideoSource>
      </div>
      <CTA>
        <MoreVert size={24} />
      </CTA>
    </Container>
  );
};

export default VideoItem;
