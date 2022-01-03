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

export const FooterDiv = styled.div`
  text-align: center;
  margin-top: 20px;

  a {
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    &:hover {
      color: aqua;
      span {
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        color: red;
      }
    }
  }
`;
