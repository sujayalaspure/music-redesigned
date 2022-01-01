import styled from "styled-components";
import COLORS from "../../utils/colors";

export const PlayerWrapper = styled.div`
  position: sticky;
  bottom: 0;

  border-top: 1px solid #4f1e0daa;
  height: 80px;
  background-color: ${COLORS.bg.secondary}dd;
  display: grid;
  grid-template-rows: auto max-content;
  .conent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    flex: 1;
    .first {
      display: flex;
    }
  }
`;

export const MusicThumbnail = styled.img`
  height: 50px;
  border-radius: 4px;
  display: block;
`;

export const MusicInfo = styled.div`
  margin-left: 16px;
`;
export const Title = styled.h3`
  font-size: 1.4rem;
  color: ${COLORS.text.light};
`;

export const Artist = styled.p`
  color: ${COLORS.text.dark};
  font-size: 0.7rem;
`;

export const PlayerControls = styled.div`
  display: flex;
  align-items: center;
`;

export const OtherInfo = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 6px;
  }
`;
