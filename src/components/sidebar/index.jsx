import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  SidebarContainer,
  SidebarHeader,
  SearchBar,
  SidebarBody,
  SidebarMenu,
  MenuItem,
  SidebarFooter,
  FriendsList,
} from "./style";
import {
  MoreVert,
  Search,
  Home,
  Radio,
  Explore,
  Favorite,
  Person,
  Podcasts,
} from "@styled-icons/material-rounded";

const menuItemsInit = [
  { id: "1", link: "/", active: true, title: "Home", Icon: Home },
  { id: "2", link: "discover", title: "Discover", Icon: Explore },
  { id: "3", link: "", title: "Likes", Icon: Favorite },
  { id: "4", link: "", title: "Podcast", Icon: Podcasts },
  { id: "5", link: "radio", title: "Radio", Icon: Radio },
  { id: "6", link: "", title: "Profile", Icon: Person },
];

const Sidebar = () => {
  const [menuItems, setmenuItems] = useState(menuItemsInit);
  let navigate = useNavigate();

  const selectMenuItem = (id) => {
    setmenuItems(
      menuItems.map((item) => {
        return { ...item, active: item.id === id };
      })
    );
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <div>
          <img
            height={40}
            src="https://brandlogos.net/wp-content/uploads/2021/11/youtube-music-logo-1-512x512.png"
            alt="Youtube Music Logo"
          />
          <h2>Music</h2>
        </div>
        <MoreVert size={24} />
      </SidebarHeader>
      <SearchBar>
        <Search size={24} />
        <input placeholder="Search..." />
      </SearchBar>
      <SidebarBody>
        <SidebarMenu>
          {menuItems.map((item) => (
            <MenuItem
              _active={item.active}
              key={item.id}
              onClick={() => {
                selectMenuItem(item.id);
                navigate(item.link);
              }}
            >
              {item.active && <div className="dot-before" />}
              <item.Icon size={24} />
              <span>{item.title}</span>
            </MenuItem>
          ))}
        </SidebarMenu>
        <FriendsList>Friend's Room</FriendsList>
      </SidebarBody>
      <SidebarFooter>
        <h5>Your Account</h5>
        <div className="profile">
          <img src="https://joeschmoe.io/api/v1/random" height={50} alt="" />
          <div className="profile-content">
            <h4>Sujay Alaspure</h4>
            <h6>alaspuresujay@gmail.com</h6>
          </div>
        </div>
      </SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;
