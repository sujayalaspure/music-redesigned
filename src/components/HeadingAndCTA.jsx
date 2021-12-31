import React from "react";
import styled from "styled-components";
import COLORS from "../utils/colors";

const HeadingAndCTA = ({ title, onClick, CTAText }) => {
  const logSomething = () => console.log(`${title} Show All`);
  return (
    <Container>
      <Title>{title || "Musics"}</Title>
      <ButtonWrapper onClick={onClick || logSomething}>
        {CTAText || "Show All"}
      </ButtonWrapper>
    </Container>
  );
};

export default HeadingAndCTA;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  color: ${COLORS.text.light};
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: ${COLORS.text.light};
  }
`;
