import React from "react";
import { useState } from "react";
import GeneralPopUp from "../GeneralPopUp/GeneralPopUp";
function User() {
  return (
    <section className="server-header">
      <div className="KO-header">
        <h1 className="server">User</h1>
        <p className="p-header">
          يعرض معلومات, مثل تاريخ السيرفر وتاريخ التسجيل في الديسكورد عنك او عن
          مستخدم اخر.
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

export default User;
