import React from "react";
import styled from "styled-components";
import COLORS from "../../utils/colors";

const GenreSection = ({ genere, onClick, selectedGen }) => {
  return (
    <Container>
      {genere.length === 0 && <div>No Data Found</div>}
      {genere?.map((gen) => (
        <GenereItem
          onClick={() => {
            onClick(gen);
          }}
          key={gen.id}
          selected={gen.id === selectedGen?.id}
        >
          <img
            src="https://www.svgrepo.com/show/200200/music-player.svg"
            height={70}
            alt=""
          />
          <p className="title">{gen.name}</p>
        </GenereItem>
      ))}
    </Container>
  );
};

export default GenreSection;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 10px;
  grid-template-columns: repeat(4, max-content); */
`;

const GenereItem = styled.div`
  box-sizing: border-box;
  /* box-shadow: 0px 0px 0px 2px ${COLORS.accent} inset; */
  background-color: ${COLORS.bg.secondary}55;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  margin: 5px;
  max-width: 90px;
  padding: 10px;
  ${(_) => _.selected && `box-shadow: 0px 0px 0px 2px ${COLORS.accent} inset;`}
  .title {
    font-size: 1rem;
    color: ${COLORS.text.light};
  }
`;
