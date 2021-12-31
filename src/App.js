import React from "react";
import MainSection from "./components/main-section";
import Sidebar from "./components/sidebar";
import { AppContainer, AppWrapper } from "./style";

const App = () => {
  return (
    <AppWrapper>
      <AppContainer>
        <Sidebar />
        <MainSection />
      </AppContainer>
    </AppWrapper>
  );
};

export default App;
