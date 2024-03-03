import React, { useState } from "react";
import './Sidebar.css'
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

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const [display,setDisplay]=useState(true)
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
        <div className="server-bot">
          {/* <button onClick={()=>{display==false? setDisplay(true): setDisplay(false)}}>server 1</button>
          <button>server 2</button>
          <button>server 3</button> */}
        </div>
        <ul className={display==true ? "sidebar-list active" : "d-hiden"}>
          <li className="sidebar-list-item">
            <a href="">
              <BsGrid1X2Fill className="icon" /> Dashboard
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsFillArchiveFill className="icon" /> Products
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsFillGrid3X3GapFill className="icon" /> Categories
            </a>
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
