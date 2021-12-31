import styled from "styled-components";
import backgroundImage from "./assets/wallpaperflare.com_wallpaper.jpg";
export const AppWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  height: 90vh;
  width: 90vw;
  border: 1px solid #4f1e0daa;
  border-radius: 20px;
  overflow: hidden;
`;
