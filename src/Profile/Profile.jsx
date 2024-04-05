import React, { useState } from "react";
import "./Profile.css";
import GeneralPopUp from "../GeneralPopUp/GeneralPopUp";
import ProfilePopUp from "../ProfilePopUp/ProfilePopUp";
function Profile() {
  return (
    <section className="server-header">
      <div className="KO-header">
        <h1 className="server">Profile</h1>
        <p className="p-header" >
          عرض بطاقة التعريف الشخصية العامة المخصصة لك أو لشخص آخر.
        </p>
      </div>
      <div className="tow-buttons">
        <div>
          <GeneralPopUp />
        </div>
        <label>
          <input class="toggle-checbox" type="checkbox" />
          <div class="toggle-switing"></div>
        </label>
      </div>
    </section>
  );
}

export default Profile;
