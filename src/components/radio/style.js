import styled from "styled-components";
import COLORS from "../../utils/colors";

export const MainContentWrapper = styled.div`
  /* background-color: #df00a9aa; */
  background-color: ${COLORS.bg.primary}cd;
  border-left: 1px solid #4f1e0daa;
  overflow-y: scroll;
  position: relative;
  padding-top: 16px;

  .player {
    position: sticky;
    bottom: 0;
    width: 100%;
  }
`;

export const MiddleSection = styled.div`
  margin: 32px 16px 16px;
  display: grid;
  gap: 20px;
  grid-template-rows: max-content auto;
`;

export const SectionBox = styled.div`
  background-color: ${COLORS.bg.primary};
  padding: 0 16px;
  border: 1px solid #4f1e0daa;
  border-radius: 12px;
  overflow-y: scroll;
  max-height: 50vh;
  margin-bottom: 20px;
  min-height: 100px;
`;

export const RightSection = styled.div`
  /* background-color: #df00a9aa; */
  min-width: 400px;
  overflow: scroll;
  max-height: 50vh;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export const ChannelSection = styled.div`
  /* background-color: #dfa0a9aa; */
  border: 1px solid #4f1e0daa;
  border-radius: 12px;
  min-height: 200px;
  padding: 10px 16px;
`;

export const GlobalChannelItem = styled.div`
  padding: 8px 16px;
  width: max-content;
  max-width: 160px;
  /* border: 1px solid #dfa0a9aa; */
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  &:hover {
    background-color: ${COLORS.bg.secondary}55;
  }

  .thumbnail {
    height: 100px;
    /* width: 132px; */
    border-radius: 18px;
    align-self: center;
    margin-bottom: 8px;
  }

  .title {
    color: ${COLORS.text.light};
    font-size: 18px;
  }

  .desc {
    font-size: 14px;
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .searchbar {
    background-color: black;
    height: 40px;
    padding: 2px 8px;
    border: none;
    color: aliceblue;
    border: 1px solid #4f1e0daa;
    border-radius: 4px;

    datalist {
      border: 1px solid yellow;
    }
    &::placeholder {
      color: ${COLORS.text.primary};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const CountriesSection = styled.div``;

export const GenreSection = styled.div``;
