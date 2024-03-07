import React, { useState } from "react";
import img1 from "../Sidebar/img/pre.jpg";
import img2 from "../Sidebar/img/zz.jpg";
import img3 from "../Sidebar/img/xx.jpg";
import img4 from "../Sidebar/img/cc.jpg";
import "./Sidebar.css";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [display, setDisplay] = useState(false);
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">DopticaBot</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>
      <div className="all-server-bot">
        <div className="server-bot" style={{gap:"20px"}}>
          <img
            src={img1}
            alt=""
            style={{ width: "70px", borderRadius: "50%", cursor: "pointer" }}
            onClick={() => {
              display == false ? setDisplay(true) : setDisplay(false);
            }}
          />
          <img
            src={img2}
            alt=""
            style={{ width: "70px", borderRadius: "50%", cursor: "pointer" }}
            onClick={() => {
              display == false ? setDisplay(true) : setDisplay(false);
            }}
          />
          <img
            src={img3}
            alt=""
            style={{ width: "70px", height:"70px", borderRadius: "50%", cursor: "pointer" }}
            onClick={() => {
              display == false ? setDisplay(true) : setDisplay(false);
            }}
          />
          <img
            src={img4}
            alt=""
            style={{ width: "70px", borderRadius: "50%", cursor: "pointer" }}
            onClick={() => {
              display == false ? setDisplay(true) : setDisplay(false);
            }}
          />
        </div>
        <ul className={display == true ? "sidebar-list active" : "d-hiden"}>
          <li className="sidebar-list-item">
            {/* <a href="">
              <BsGrid1X2Fill className="icon" /> Dashboard
            </a> */}
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li className="sidebar-list-item">
            {/* <a href="">
              <BsFillArchiveFill className="icon" /> Products
            </a> */}
              <NavLink
              to="/page1"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              page1
            </NavLink>
          </li>
          <li className="sidebar-list-item">
            {/* <a href="">
              <BsFillGrid3X3GapFill className="icon" /> Categories
            </a> */}
            <NavLink
              to="/page2"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              page2
            </NavLink>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsPeopleFill className="icon" /> Customers
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsListCheck className="icon" /> Inventory
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsMenuButtonWideFill className="icon" /> Reports
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsFillGearFill className="icon" /> Setting
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
