import React, { useState } from "react";
import "./GeneralTowPageCard.css";
import ProfilePopUp from "../ProfilePopUp/ProfilePopUp";
// import img1 from "./img/1.png"
function GeneralTowPageCard(props) {
  // const [show,setShow]=useState(false)
  return (
    //     <div className="grid-item">
    //     <div className="flex">
    //         <h2>WElcom</h2>
    //       <label className="switch">
    //         <input type="checkbox" />
    //         <span className="slider round"></span>
    //       </label>
    //       <i className="fa-regular fa-comments"></i>
    //     </div>
    //     <input type="submit" value="بحاجة الى الأعداد" className="but" onClick={()=>{
    //  setShow(true)
    //     }} />
    //     {(show ? <ProfilePopUp/> : null)}
    //   </div>
    <>
      <div class="services" id="Services">
        <div class="conterner">
          <div class="box text-center position-relative  ">
            <div className="At-developer position-absolute  ">قيد التطوير</div>
            <img src={props.img} alt="" className="icon-services" />
            <h3 className="Tow-page-h3"> {props.name}</h3>
            <div class="info position-absolute  ">
              <h4 className="  number-card">{props.number}</h4>
              <a href="" className="position-relative ">
                Setting
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralTowPageCard;
