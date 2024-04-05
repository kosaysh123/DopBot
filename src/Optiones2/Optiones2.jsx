import React, { useState } from "react";
import "./optiones2.css";
import ModelUp from "../ModelUp/ModelUp";

function optiones2() {
  const [ch, setCh] = useState(false);
  console.log(ch);
  return (
    <div class="ag-format-container">
      <div class="ag-courses_box">
        <div class="ag-courses_item">
          <div class="ag-courses-item_link">
            <div class="op1-ag-courses-item_bg"> </div>

            <div class="ag-courses-item_title">
              <label>
                <input
                  class="toggle-checbox"
                  type="checkbox"
                  checked={ch}
                  onChange={() => {
                    setCh(!ch);
                  }}
                />
                <div class="toggle-switing"></div>
              </label>
            </div>
            <h2
              style={{ fontFamily: "A", fontWeight: "500", fontSize: "25px" }}
            >
              {" "}
              إرسال رسالة عند دخول عضو للسيرفير
            </h2>
          </div>
          {ch ? <ModelUp isVisible={ch} /> : null}
        </div>
      </div>
    </div>
  );
}

export default optiones2;
