import { Search } from "@styled-icons/material-rounded";
import React from "react";
import styled from "styled-components";
import COLORS from "../utils/colors";

const SearchBox = ({ inputRef, handleInput, placeholder }) => {
  return (
    <Container>
      <input ref={inputRef} onChange={handleInput} placeholder={placeholder} />
      <Search size={24} className="icon" />
    </Container>
  );
};

export default SearchBox;

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #4f1e0daa;
  border-radius: 4px;
  background-color: black;
  height: 40px;
  padding: 2px 8px;

  input {
    border: none;
    color: aliceblue;
    height: 100%;
    flex: 0.8;
    background-color: transparent;

    &::placeholder {
      color: ${COLORS.text.primary};
    }

    &:focus {
      outline: none;
    }
  }
`;
