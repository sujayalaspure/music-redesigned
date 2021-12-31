import React from "react";
import MainSection from "./components/main-section";
import Sidebar from "./components/sidebar";
import { AppContainer } from "./style";

const App = () => {
  return (
    <AppContainer>
      <Sidebar />
      <MainSection />
    </AppContainer>
  );
};

export default App;
