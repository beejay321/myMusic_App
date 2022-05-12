import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { SidebarData, Pages } from "./SidebarData";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RadioRoundedIcon from "@material-ui/icons/RadioRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import DevicesRoundedIcon from "@material-ui/icons/DevicesRounded";
import logo from "../assets/images/logo.png";

function Sidebar(props) {
  return (
    <div className="sidebar px-2 py-3 ">
      <div className=" px-3 pt-1 pb-4 mt-3 d-flex justify-content-center ">
        <img alt="music_icon" src={logo} width="50" className="d-inline-block align-top mx-2 py-1 " />
      </div>
      <div className=" px-3 py-1 d-flex justify-content-between">
        <div className="nav">
          <DevicesRoundedIcon />
        </div>
        <div className="nav">
          <RadioRoundedIcon />
        </div>
        <div className="nav">
          <FavoriteRoundedIcon />
        </div>
      </div>
      <div className="forYou px-3 py-2 mt-3 d-flex justify-content-center ">
        <div>Made For You</div>
      </div>

      <div className="">
        <h6 className="sidebarSubtitle px-3 pt-3">Quick Access</h6>
        <ListGroup className="sidebarData">
          {SidebarData.map((data, key) => (
            <>
              <ListGroupItem href="#link1" className="sidebarDataRow  d-flex ">
                <div className="">{data.icon}</div>
                <div className="px-4 pt-1">{data.title}</div>
              </ListGroupItem>
            </>
          ))}
          {/* <ListGroupItem href="#link2">Link 2</ListGroupItem>
              <ListGroupItem onClick={alertClicked}>Trigger an alert</ListGroupItem> */}
        </ListGroup>
      </div>
      <div className="mt-3">
        <h6 className="sidebarSubtitle px-3 pt-3">Your Library</h6>
        <ListGroup className="sidebarData">
          {Pages.map((data, key) => (
            <>
              <ListGroupItem href="#link1" className="sidebarDataRow  d-flex ">
                <div className="">{data.icon}</div>
                <div className="px-4 pt-1">{data.title}</div>
              </ListGroupItem>
            </>
          ))}
        </ListGroup>
      </div>
      <div className="addPlaylist px-3 py-2 mt-4 d-flex justify-content-between">
        <div>New Playlist</div>
        <div>
          <AddRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
