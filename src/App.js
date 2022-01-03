import React from "react";
import MainSection from "./components/main-section";
import Sidebar from "./components/sidebar";
import { Routes, Route } from "react-router-dom";
import { AppContainer, AppWrapper, FooterDiv } from "./style";
import Radio from "./components/radio";

const App = () => {
  return (
    <AppWrapper>
      <AppContainer>
        <Sidebar />

        <Routes>
          <Route exact path="/" element={<MainSection />} />
          <Route path="radio" element={<Radio />} />
        </Routes>
        {/* <MainSection /> */}
      </AppContainer>
      <FooterDiv>
        <a href="https://github.com/alaspuresujay/music-redesigned">
          Made with <span>♥</span> by Sujay Alaspure
        </a>
      </FooterDiv>
    </AppWrapper>
  );
};

export default App;
