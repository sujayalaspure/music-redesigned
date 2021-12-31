import styled from "styled-components";
import COLORS from "../../utils/colors";

export const TopBanner = styled.div`
  height: 40%;
  max-height: 250px;
  overflow: hidden;
  border-radius: 14px;
  position: relative;
  img {
    max-width: 100%;
    display: block;
    margin: auto;
    z-index: -1;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  align-items: center;
`;
export const BannerButton = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  background-color: ${COLORS.bg.secondary}bb;
  border-radius: 50px;
  margin-right: 16px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: ${COLORS.text.light};

  p {
    font-size: 16px;
    margin-left: 12px;
  }
  .sub {
    margin-left: 0;
  }

  &:hover {
    background-color: ${COLORS.bg.secondary};
  }
`;

export const BannerTitle = styled.h2`
  position: absolute;
  bottom: 8px;
  left: 24px;
  color: white;
`;
