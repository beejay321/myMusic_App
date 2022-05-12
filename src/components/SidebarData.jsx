import React from "react";
import HomeIcon from "@material-ui/icons/HomeRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import AlbumRoundedIcon from "@material-ui/icons/AlbumRounded";
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded";
import ViewStreamRoundedIcon from "@material-ui/icons/ViewStreamRounded";
import QueueMusicRoundedIcon from "@material-ui/icons/QueueMusicRounded";
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Search",
    icon: <SearchRoundedIcon />,
    link: "/home",
  },
  {
    title: "DashBoard",
    icon: <DashboardRoundedIcon />,
    link: "/home",
  },
];
export const Pages = [
  {
    title: "Albums",
    icon: <AlbumRoundedIcon />,
    link: "/home",
  },
  {
    title: "Artists",
    icon: <SupervisorAccountRoundedIcon />,
    link: "/home",
  },
  {
    title: "Podcasts",
    icon: <ViewStreamRoundedIcon />,
    link: "/home",
  },
  {
    title: "Playlist",
    icon: <QueueMusicRoundedIcon />,
    link: "/home",
  },
];
