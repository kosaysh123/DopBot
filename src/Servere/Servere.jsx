import React, { useState } from "react";
import ProfilePopUp from "../ProfilePopUp/ProfilePopUp";
import GeneralPopUp from "../GeneralPopUp/GeneralPopUp";

function Servere() {
  return (
    <section className="server-header">
      <div className="KO-header">
        <h1 className="server">Server</h1>
        <p className="p-header">يظهر معلومات حول السيرفر</p>
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

export default Servere;
