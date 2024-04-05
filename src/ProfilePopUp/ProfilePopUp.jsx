import React from 'react'
import './ProfilePopUp.css'
function ProfilePopUp() {
  return (
    <div>
        <section className="lists">
    <div className="abbreviations">
        <p className="abbre-p">الاختصارات</p>
        <input className="abbre" type="text" placeholder="إنشاء .." />  
    </div>

    <div className="rooms-rules-div">
            <p className="rooms-rules-p">الرولات المفعلة</p>
        <select className="rooms-roles" name="اختر...">
            <option value="" disabled selected hidden>إختر ..</option>
            <option value="1">3</option>
            <option value="1">3</option>
            <option value="1">5</option>
        </select>
    </div>

    <div className="rooms-rules-div">
        <p className="rooms-rules-p">الرولات المعطلة</p>
    <select className="rooms-roles" name="اختر...">
        <option value="" disabled selected hidden>إختر ..</option>
        <option value="1">3</option>
        <option value="1">3</option>
        <option value="1">5</option>
    </select>
    </div>

    <div className="rooms-rules-div">
        <p className="rooms-rules-p">الرومات المفعلة</p>
    <select className="rooms-roles" name="اختر...">
        <option value="" disabled selected hidden>إختر ..</option>
        <option value="1">3</option>
        <option value="1">3</option>
        <option value="1">5</option>
    </select>
    </div>

    <div className="rooms-rules-div">
        <p className="rooms-rules-p">الرومات المعطلة</p>
    <select className="rooms-roles" name="اختر...">
        <option value="" disabled selected hidden>إختر ..</option>
        <option value="1">3</option>
        <option value="1">3</option>
        <option value="1">5</option>
    </select>
    </div>

    <div className="massage-1-div">
        <p className="massage">حذف رد البوت تلقائيا عندما يتم حذف رسالة العضو</p>
        <input className="hide-checkbox" type="checkbox" id="check-1"/>
            <label for="check-1" className="but-num-1"></label>
    </div>

    <div className="massage-2-div">
        <p className="massage">الحذف التلقائي للامر المستدعى</p>
        <input className="hide-checkbox" type="checkbox" id="check-2"/>
            <label for="check-2" className="but-num-1"></label>
    </div>

    <div className="massage-2-div">
    <p className="massage">مسح تلقائي لرسالة الرد من البوت بعد 5 ثواني</p>
        <input className="hide-checkbox" type="checkbox" id="check-3"/>
            <label for="check-3" className="but-num-1"></label>
    </div>

    <div className="save-changes-div">
        
        <a href="#" className="save-changes"> حفظ التغييرات </a>
        <a href="#" className="cancel">الغاء</a>
    </div>
</section>
    </div>
  )
}

export default ProfilePopUp