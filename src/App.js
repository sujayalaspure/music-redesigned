import React from "react";
import MainSection from "./components/main-section";
import Sidebar from "./components/sidebar";
import { Routes, Route, Link } from "react-router-dom";
import { AppContainer, AppWrapper } from "./style";
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
    </AppWrapper>
  );
};

export default App;
