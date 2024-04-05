import "./GeneralFourPage.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function GeneralFourPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{ fontFamily: "A", fontWeight: "900", fontSize: "33px" }}
      >
        أضافة رد تلقائي
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ width: "100%" }}>
            <div>
              <header class="add-reply">
                <h2 class="reply-h1">إضافة رد تلقائي</h2>
                <button class="delete-button">&times;</button>
              </header>
              <section class="text-section" />
              <div>
                <p class="massage-p">الرسالة</p>
                <input
                  class="massage-input"
                  type="text"
                  placeholder="الرسالة"
                />
              </div>
              <div class="checkbar-div">
                <input type="checkbox" id="search" />
                <label for="search">البحث في الجملة كاملة</label>

                <input class="margin-right" type="checkbox" id="sendcode" />
                <label for="sendcode">إرسال كود</label>
              </div>
              <div>
                <p class="textarea-p">الرد</p>
                <textarea
                  class="textarea"
                  name=""
                  id=""
                  cols="183"
                  rows="7"
                  placeholder="الرد"
                ></textarea>
              </div>
              <div class="">
                <h4 class="reply-p">ردود عشوائية</h4>
                <p class="reply-num">1</p>
              </div>
              <div className=""> 
            <h4 class="var">المتغيرات</h4>
             <ul class="var-list">
               <li class="margin-bottom-1"> <span class="pink-words-1"> </span>الإشارة الى الكاتب</li>
                <li class="margin-bottom-2"><span class="pink-words-1"> </span>يظهر اسم العضو بدون الإشارة له</li>
                <li><span class="pink-words-1"> </span>عدد دعوات العضو <span class="prime-1">بريميوم</span></li>
            </ul>
      </div>

              <section class="roles-section">
                <div class="rooms-rules-div">
                  <p class="rooms-rules-p">الرولات المفعلة</p>
                  <select class="rooms-roles" name="اختر...">
                    <option value="" disabled selected hidden>
                      إختر ..
                    </option>
                    <option value="1">3</option>
                    <option value="1">3</option>
                    <option value="1">5</option>
                  </select>
                </div>

                <div class="rooms-rules-div">
                  <p class="rooms-rules-p">الرولات المعطلة</p>
                  <select class="rooms-roles" name="اختر...">
                    <option value="" disabled selected hidden>
                      إختر ..
                    </option>
                    <option value="1">3</option>
                    <option value="1">3</option>
                    <option value="1">5</option>
                  </select>
                </div>

                <div class="rooms-rules-div">
                  <p class="rooms-rules-p">الرومات المفعلة</p>
                  <select class="rooms-roles" name="اختر...">
                    <option value="" disabled selected hidden>
                      إختر ..
                    </option>
                    <option value="1">3</option>
                    <option value="1">3</option>
                    <option value="1">5</option>
                  </select>
                </div>

                <div class="rooms-rules-div">
                  <p class="rooms-rules-p">الرومات المعطلة</p>
                  <select class="rooms-roles" name="اختر...">
                    <option value="" disabled selected hidden>
                      إختر ..
                    </option>
                    <option value="1">3</option>
                    <option value="1">3</option>
                    <option value="1">5</option>
                  </select>
                </div>

                <div class="save-changes-div">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleClose}
                    style={{ fontFamily: "A", fontWeight: "900", fontSize: "23px",marginRight:"30px" }}
                  >
                    حفظ التغيرات
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleClose}
                    style={{ fontFamily: "A", fontWeight: "900", fontSize: "23px" }}
                  >
                    أغلاق
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
