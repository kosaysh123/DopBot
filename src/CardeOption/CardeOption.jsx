import { useState } from "react";
import "./CardeOption.css";
import ModelUp2 from "../ModelUp2/ModelUp2";

function CardeOption() {
  const [ch, setCh] = useState(false);
console.log(ch)
  return (
    <div>
      <div class="ag-format-container">
        <div class="ag-courses_box">
          <div class="ag-courses_item">
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"> </div>
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
                ارسال رسالة عند خروج العضو من السيرفر
              </h2>
            </div>
            {ch ? <ModelUp2 isVisible={ch} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardeOption;
