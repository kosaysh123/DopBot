import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import "./ModelUp.css";
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

export default function ModelUp2({ isVisible, curent }) {
  const [open, setOpen] = React.useState(isVisible);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class="oi">
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="اكتب هنا ..."
                style={{direction:"rtl"}}
              ></textarea>
            </div>

            <div class="select">
              <p>:ارسال للروم</p>
              <select class="form-select" aria-label="Default select example" value={"123"}>
                <option selected>...اختر</option>
                <option value="1">whatsapp</option>
                <option value="2">telegram</option>
                <option value="3">discord</option>
              </select>
            </div>

            <div class="pl">
              <h6>:المتغيرات</h6>
              <div class="co">
                <p>منشن العضو <span>[user]</span></p>
                <p>اسم العضو بدون منشن <span>[userName]</span></p>
                <p>عدد الاعضاء <span>[memberCount]</span></p>
                <p>اسم السيرفر <span>[server]</span></p>
              </div>
            </div>
          </div>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
