import React from "react";
import { PlayCircle, Radio } from "@styled-icons/material-rounded";

import { BannerButton, ButtonWrapper, TopBanner, BannerTitle } from "./style";

const bannerImage =
  "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2461&q=80";

const Banner = ({ imgSrc = null }) => {
  return (
    <TopBanner>
      <img src={imgSrc || bannerImage} alt="" />
      <BannerTitle>Hello Music</BannerTitle>
      <ButtonWrapper>
        <BannerButton>
          <PlayCircle size={20} />
          <p>Play</p>
        </BannerButton>
        <BannerButton>
          <Radio size={20} />
          <p>Radio</p>
        </BannerButton>
        <BannerButton>
          <p className="sub">Subscribe</p>
        </BannerButton>
      </ButtonWrapper>
    </TopBanner>
  );
};

export default Banner;
