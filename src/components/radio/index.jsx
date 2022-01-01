import React, { useState } from "react";
import { useGetRadioChannelsQuery } from "../../services/radioApi";
import Banner from "../Banner";
import Player from "../player";
import {
  ChannelSection,
  GlobalChannelItem,
  Heading,
  MainContentWrapper,
  MiddleSection,
  RightSection,
  SearchBar,
  SectionBox,
} from "./style";

const imgSrc =
  "https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80";

const channelData = {
  id: 38028,
  name: "All India Radio - FM Rainbow",
  band: "FM",
  country: "India",
  city: "Mumbai",
  logo: {
    original:
      "https://static-media.streema.com/media/object-images/bcc05e6d-2244-4520-831c-aeb40cb5988f.JPG",
    s600x600:
      "https://static-media.streema.com/media/cache/e0/24/e024f8fe60c20a447f857303d5ccb9e6.jpg",
    s150x150:
      "https://static-media.streema.com/media/cache/e4/33/e433b26c5ad701e81658c626f36fb5a4.jpg",
    s88x88:
      "https://static-media.streema.com/media/cache/f6/cd/f6cd5655cb8d5f20fe917522ca1b7d21.jpg",
    s75x75:
      "https://static-media.streema.com/media/cache/6a/5a/6a5a221125705f91ab66c2fa66cae566.jpg",
    s48x48:
      "https://static-media.streema.com/media/cache/a6/f4/a6f47140675f391ce383666558af5719.jpg",
  },
  genres: [
    "Bhangra",
    "Bollywood",
    "India",
    "Indian",
    "Pop",
    "Public",
    "Top 40",
  ],

  https_url: [
    {
      works: true,
      is_file: false,
      codec: "mp3",
      protocol: "icecast",
      last_test_result: "worked",
      url: "https://stream-al.planetradio.co.uk/city.mp3",
      content_type: "audio/mpeg",
      bitrate: 112,
    },
  ],
};

const Radio = () => {
  const { data: radioChannels, isFetching } = useGetRadioChannelsQuery({
    keyWord: "a",
  });
  console.log("LOG> [main-section/index.jsx:21]  --->", radioChannels);
  const [currentSong, setCurrentSong] = useState({});
  const [channels, setchannels] = useState([]);

  return (
    <MainContentWrapper>
      <Banner imgSrc={imgSrc} />

      <MiddleSection>
        <ChannelSection>
          <Heading>
            <h2>Channels</h2>
            <input
              onInput={(e) => console.log(e.target.value)}
              list="browsers"
              className="searchbar"
              placeholder="Search By Country"
            />
          </Heading>
          <GlobalChannelItem>
            <img className="thumbnail" src={channelData.logo.original} alt="" />
            <h4 className="title">{channelData.name.slice(0, 16)}</h4>
            <p className="desc">{channelData.country}</p>
          </GlobalChannelItem>
        </ChannelSection>
        <RightSection>
          <SectionBox>Local Channels</SectionBox>
          <SectionBox>Genres</SectionBox>
        </RightSection>
      </MiddleSection>

      <div className="player">
        <Player currentSong={currentSong} />
      </div>
    </MainContentWrapper>
  );
};

export default Radio;
