import React from "react";
import "./GeneralTowPage.css";
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from "./img/4.png"
import img5 from "./img/5.jpg"
import img6 from "./img/6.png"
import GeneralTowPageCard from "../../GeneralTowPageCard/GeneralTowPageCard";
// import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
function GeneralTowPage() {
  return (
    <div>
      <div className="GeneralTowPage">
       <div className="row gap-5">
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <GeneralTowPageCard name="ازعاج بالرسائل" number="1" img={img3}/>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <GeneralTowPageCard name="الكلمات المسيئة " number="2" img={img6}/>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <GeneralTowPageCard name="تكرار النص  " number="3" img={img1}/>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <GeneralTowPageCard name=" الرسائل المكررة" number="4" img={img2}/>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <GeneralTowPageCard name="روابط السيرفرات " number="5" img={img5}/>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <GeneralTowPageCard name=" الروابط" number="6" img={img4}/>
        </div>
       </div>
      </div>
    </div>
  );
}

export default GeneralTowPage;
