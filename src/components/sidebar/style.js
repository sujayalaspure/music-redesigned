import styled from "styled-components";
import COLORS from "../../utils/colors";

export const SidebarContainer = styled.div`
  background-color: ${COLORS.bg.primary}cd;
  display: grid;
  grid-template-rows: max-content max-content auto max-content;
  padding: 16px;
`;

export const SidebarHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.text.light};
  margin-bottom: 16px;
  div {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
      margin-left: -4px;
    }
  }
  h2 {
    font-weight: bolder;
  }
`;

export const SearchBar = styled.div`
  /* height: 50px; */
  border-radius: 4px;
  border: 1px solid #4f1e0ddd;
  display: flex;
  align-items: center;
  background-color: black;
  padding: 0 8px;
  margin-bottom: 16px;

  input {
    background-color: transparent;
    height: 40px;
    padding: 2px 8px;
    border: none;
    color: aliceblue;

    &:focus {
      outline: none;
    }
  }
`;

export const SidebarBody = styled.div``;

export const SidebarMenu = styled.div``;

export const FriendsList = styled.div``;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
  border-radius: 4px;
  position: relative;
  color: ${(_) => (_._active ? COLORS.text.light : COLORS.text.primary)};
  cursor: pointer;
  .dot-before {
    position: absolute;
    left: -10px;
    width: 4px;
    height: 8px;
    background-color: red;
  }
  span {
    margin-top: 3px;
  }
  svg {
    margin-right: 12px;
  }

  &:hover {
    background-color: ${COLORS.bg.secondary}55;
  }
`;

export const SidebarFooter = styled.div`
  height: 80px;
  h5 {
    color: ${COLORS.text.light};
    font-weight: bolder;
    font-size: 16px;
  }
  .profile {
    display: flex;
    align-items: center;
    margin-top: 8px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      padding: 2px;
      border: 1px solid ${COLORS.text.dark};
    }

    .profile-content {
      margin-left: 12px;
      /* margin-top: 8px; */
      h4 {
        color: ${COLORS.text.light};
      }
    }
  }
`;
