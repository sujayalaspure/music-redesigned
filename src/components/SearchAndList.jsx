import { Search } from "@styled-icons/material-rounded";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import COLORS from "../utils/colors";

const SearchAndList = ({ optionList, onOptionClick, placeholder }) => {
  const [showList, setshowList] = useState(false);
  const [options, setOptions] = useState(optionList);
  const inputRef = useRef();

  const handleInput = (e) => {
    const { value } = e.target;
    if (value) {
      setshowList(true);
      const filteredOptions = optionList.filter((option) =>
        option.option.toLowerCase().includes(value.toLowerCase())
      );
      setOptions(filteredOptions);
    } else {
      setshowList(false);
    }
  };
  return (
    <>
      {showList && (
        <CountryListWrapper>
          {options?.map((opt) => (
            <li
              onClick={() => {
                onOptionClick(opt);
                setshowList(false);
                inputRef.current.value = opt.option;
              }}
              key={opt.id}
            >
              {opt.option}
            </li>
          ))}
        </CountryListWrapper>
      )}
      <div className="searchbar">
        <input
          ref={inputRef}
          onChange={handleInput}
          placeholder={placeholder}
        />
        <Search size={24} />
      </div>
    </>
  );
};

export default SearchAndList;

const CountryListWrapper = styled.ul`
  list-style: none;
  position: absolute;
  right: 20px;
  top: 60px;
  max-height: 200px;
  min-width: 150px;
  background-color: ${COLORS.bg.secondary}ff;
  border: 1px solid #4f1e0daa;
  border-radius: 4px;
  overflow-y: scroll;

  li {
    padding: 4px 8px;
    cursor: pointer;
    color: ${COLORS.text.light};

    &:hover {
      background-color: ${COLORS.bg.secondary}55;
    }
  }
`;
