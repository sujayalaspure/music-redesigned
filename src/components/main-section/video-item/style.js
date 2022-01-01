import styled from "styled-components";
import COLORS from "../../../utils/colors";

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: max-content auto max-content;

  padding: 8px 16px;
  background-color: ${COLORS.bg.secondary}55;
  border-radius: 8px;
  margin-bottom: 8px;
  .content {
    margin-left: 16px;
  }
`;
export const VideoThumbnail = styled.img`
  border-radius: 8px;
`;

export const VideoTitle = styled.div`
  font-size: 16px;
  color: ${COLORS.text.light};
`;

export const VideoSource = styled.div`
  font-size: 12px;
  color: ${COLORS.text.dark};
`;

export const CTA = styled.div`
  background-color: ${COLORS.bg.secondary + 66};
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.bg.secondary}dd;
  }
`;
