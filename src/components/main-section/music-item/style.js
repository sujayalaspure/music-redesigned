import styled from "styled-components";
import COLORS from "../../../utils/colors";

export const MusicItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  padding-right: 16px;
  .last {
    display: flex;
    align-items: center;
  }
  .first {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:hover {
    background-color: ${COLORS.bg.secondary}35;
  }
`;

export const MusicTitle = styled.h4`
  margin-left: 8px;
`;

export const MusicThumbnail = styled.img`
  height: 40px;
  border-radius: 4px;
  display: block;
`;

export const MusicDescription = styled.div``;

export const MusicArtist = styled.p`
  margin-left: 8px;
  font-size: 12px;
  color: ${COLORS.text.dark};
`;

export const MusicDuration = styled.div`
  color: ${COLORS.text.dark};
  font-size: 14px;
  margin-right: 16px;
`;

export const CTA = styled.div`
  margin-left: 16px;
  background-color: ${(_) => (_.more ? COLORS.bg.secondary + 66 : null)};
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.bg.secondary}aa;
  }
`;
