import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="edit-button" onClick={handleShow}>
        تعديل
      </div>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div>
            <section className="lists">
              <div className="abbreviations">
                <p className="abbre-p">الاختصارات</p>
                <input className="abbre" type="text" placeholder="إنشاء .." />
              </div>

              <div className="rooms-rules-div">
                <p className="rooms-rules-p">الرولات المفعلة</p>
                <select className="rooms-roles" name="اختر...">
                  <option value="" disabled selected hidden>
                    إختر ..
                  </option>
                  <option value="1">3</option>
                  <option value="1">3</option>
                  <option value="1">5</option>
                </select>
              </div>

              <div className="rooms-rules-div">
                <p className="rooms-rules-p">الرولات المعطلة</p>
                <select className="rooms-roles" name="اختر...">
                  <option value="" disabled selected hidden>
                    إختر ..
                  </option>
                  <option value="1">3</option>
                  <option value="1">3</option>
                  <option value="1">5</option>
                </select>
              </div>

              <div className="rooms-rules-div">
                <p className="rooms-rules-p">الرومات المفعلة</p>
                <select className="rooms-roles" name="اختر...">
                  <option value="" disabled selected hidden>
                    إختر ..
                  </option>
                  <option value="1">3</option>
                  <option value="1">3</option>
                  <option value="1">5</option>
                </select>
              </div>

              <div className="rooms-rules-div">
                <p className="rooms-rules-p">الرومات المعطلة</p>
                <select className="rooms-roles" name="اختر...">
                  <option value="" disabled selected hidden>
                    إختر ..
                  </option>
                  <option value="1">3</option>
                  <option value="1">3</option>
                  <option value="1">5</option>
                </select>
              </div>

              <div className="massage-1-div">
                <p className="massage">
                  حذف رد البوت تلقائيا عندما يتم حذف رسالة العضو
                </p>
                <input className="hide-checkbox" type="checkbox" id="check-1" />
                <label for="check-1" className="but-num-1"></label>
              </div>

              <div className="massage-2-div">
                <p className="massage">الحذف التلقائي للامر المستدعى</p>
                <input className="hide-checkbox" type="checkbox" id="check-2" />
                <label for="check-2" className="but-num-1"></label>
              </div>

              <div className="massage-2-div">
                <p className="massage">
                  مسح تلقائي لرسالة الرد من البوت بعد 5 ثواني
                </p>
                <input className="hide-checkbox" type="checkbox" id="check-3" />
                <label for="check-3" className="but-num-1"></label>
              </div>

              {/* <div className="save-changes-div">
        
        <a href="#" className="save-changes"> حفظ التغييرات </a>
        <a href="#" className="cancel">الغاء</a>
    </div> */}
            </section>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            أغلاق
          </Button>
          <Button variant="primary" onClick={handleClose}>
            حفظ التغيرات
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
