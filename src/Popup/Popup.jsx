import React from 'react'
import'./Popup.css'
function Popup() {
  return (
    <body>
   
    <div class="box-1">
        <a class="button-1" href="#popup1">Let me Pop up</a>
    </div>
    
    <div id="popup1" class="overlay">
        <div class="popup">
        <header class="add-reply">
        <h2 class="reply-h1">إضافة رد تلقائي</h2>
        <button class="delete-button">&times;</button>
    </header>
     <section class="text-section"/>
        <div >
            <p class="massage-p">الرسالة</p>
            <input class="massage-input" type="text" placeholder="الرسالة" />  
        </div>
        <div class="checkbar-div">
            <input type="checkbox" id="search"/>
            <label for="search">البحث في الجملة كاملة</label>
            
            <input class="margin-right" type="checkbox" id="sendcode"/> 
            <label for="sendcode">إرسال كود</label>
       </div>
        <div>
            <p class="textarea-p">الرد</p>
            <textarea class="textarea" name="" id="" cols="183" rows="7" placeholder="الرد"></textarea>
        </div>
        <div class="">
            <h4 class="reply-p">ردود عشوائية</h4>
            <p class="reply-num">1</p>
        </div>
      {/* <div className=""> 
            <h4 class="var">المتغيرات</h4>
             <ul class="var-list">
               <li class="margin-bottom-1"> <span class="pink-words-1">{user} </span>الإشارة الى الكاتب</li>
                <li class="margin-bottom-2"><span class="pink-words-1">{userName} </span>يظهر اسم العضو بدون الإشارة له</li>
                <li><span class="pink-words-1">{invites} </span>عدد دعوات العضو <span class="prime-1">بريميوم</span></li>
            </ul>
      </div> */}
  

    <section class="roles-section">
        <div class="rooms-rules-div">
            <p class="rooms-rules-p">الرولات المفعلة</p>
        <select class="rooms-roles" name="اختر...">
            <option value="" disabled selected hidden>إختر ..</option>
            <option value="1">3</option>
            <option value="1">3</option>
            <option value="1">5</option>
        </select>
    </div>

    <div class="rooms-rules-div">
        <p class="rooms-rules-p">الرولات المعطلة</p>
    <select class="rooms-roles" name="اختر...">
        <option value="" disabled selected hidden>إختر ..</option>
        <option value="1">3</option>
        <option value="1">3</option>
        <option value="1">5</option>
    </select>
    </div>

    <div class="rooms-rules-div">
        <p class="rooms-rules-p">الرومات المفعلة</p>
    <select class="rooms-roles" name="اختر...">
        <option value="" disabled selected hidden>إختر ..</option>
        <option value="1">3</option>
        <option value="1">3</option>
        <option value="1">5</option>
    </select>
    </div>

    <div class="rooms-rules-div">
        <p class="rooms-rules-p">الرومات المعطلة</p>
    <select class="rooms-roles" name="اختر...">
        <option value="" disabled selected hidden>إختر ..</option>
        <option value="1">3</option>
        <option value="1">3</option>
        <option value="1">5</option>
    </select>
    </div>

    <div class="save-changes-div">   
        <a href="#" class="save-changes"> حفظ التغييرات </a>
        <a href="#" class="cancel">الغاء</a>
    </div>
    </section> 
       <a class="close" href="#">&times;</a>
            <div class="content">
               
            </div>
        </div>
    </div>
    </body>
  )
}

export default Popup
