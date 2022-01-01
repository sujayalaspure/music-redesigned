import React from "react";
import styled from "styled-components";

const ProgressBar = ({ progress }) => {
  return (
    <Outer>
      <Inner min={0} max={100} value={progress} type={"range"} readOnly />
    </Outer>
  );
};

export default ProgressBar;

const Outer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* height: 2px; */
  /* width: 100%; */
  background-color: whitesmoke;
`;

const Inner = styled.input`
  background-color: whitesmoke;
  width: 100%;
  height: 2px;
  align-self: left;
  display: flex;
  align-items: center;
  -webkit-appearance: none;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  /* transition: opacity 0.2s; */

  position: relative;
  &::-moz-range-thumb {
    width: 8px;
    height: 8px;
    background: red;
    border: none;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &::-moz-range-progress {
    background-color: red;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background-color: white;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 8px;
    height: 8px;
    background: red;
    border: none;
    box-shadow: -100vw 0 0 100vw red;
    /* background-color: white; */
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

// const Dot = styled.div`
//   height: 10px;
//   width: 10px;
//   background-color: cyan;
//   margin-left: 99%;
//   border-radius: 50%;
// `;
