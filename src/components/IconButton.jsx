import React from "react";
import styled from "styled-components";
import COLORS from "../utils/colors";
const IconButton = ({ Icon, size, onClick }) => {
  return (
    <Container onClick={onClick || null}>
      <Icon size={size || 24} />
    </Container>
  );
};

export default IconButton;

const Container = styled.div`
  margin-left: 16px;
  background-color: ${COLORS.bg.secondary}66;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.bg.secondary}aa;
  }
`;
