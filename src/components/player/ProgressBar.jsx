import React from "react";
import styled from "styled-components";

const ProgressBar = ({ progress }) => {
  return (
    <Outer>
      <Inner progress={progress || 0}>{/* <Dot /> */}</Inner>
    </Outer>
  );
};

export default ProgressBar;

const Outer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  width: 100%;
  background-color: whitesmoke;
`;

const Inner = styled.div`
  background-color: red;
  width: ${(_) => _.progress}%;
  height: 2px;
  align-self: left;
  display: flex;
  align-items: center;
`;

// const Dot = styled.div`
//   height: 10px;
//   width: 10px;
//   background-color: cyan;
//   margin-left: 99%;
//   border-radius: 50%;
// `;
