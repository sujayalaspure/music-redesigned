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
  padding: 16px 16px;
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
  position: relative;
  overflow: hidden;
`;

export const ChannelListSection = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin-top: 20px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const GlobalChannelItem = styled.div`
  padding: 8px 16px;
  width: max-content;
  max-width: 160px;
  /* border: 1px solid #dfa0a9aa; */
  margin: 0 4px;
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
    width: 132px;
    object-fit: cover;
    border-radius: 18px;
    align-self: center;
    margin-bottom: 8px;
  }

  .title {
    color: ${COLORS.text.light};
    font-size: 1rem;
    white-space: nowrap;
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
      flex: 1;
      background-color: transparent;

      &::placeholder {
        color: ${COLORS.text.primary};
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

export const CountriesSection = styled.div``;

export const CountryListWrapper = styled.ul`
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


