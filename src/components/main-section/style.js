import styled from "styled-components";
import COLORS from "../../utils/colors";

export const MainContentWrapper = styled.div`
  /* background-color: #df00a9aa; */
  background-color: ${COLORS.bg.primary}cd;
  border-left: 1px solid #4f1e0daa;
  overflow-y: scroll;
  position: relative;
  padding: 16px 16px 16px;
`;

export const MusicSection = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: auto max-content;
`;

export const MusicContainer = styled.div`
  margin-right: 4px;
`;

export const VideoContainer = styled.div`
  background-color: ${COLORS.bg.primary};
  /* max-width: 300px; */
  min-width: 400px;
  padding: 0 16px;
  border: 1px solid #4f1e0daa;
  border-radius: 8px;
  overflow-y: scroll;
`;

export const Divider = styled.div`
  height: 1px;
  width: 80%;
  margin: 0 10%;
  align-self: center;
  background-color: #4f1e0daa;
`;
