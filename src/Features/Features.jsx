import React from 'react'
import "./Features.css"
import img1 from "../Features/img/Futcher01.jpg"
import img2 from "../Features/img/Futcher02.jpg"
import img3 from "../Features/img/Futcher04.jpg"
function Features() {
  return (
    <div>
        <div class="features" id="Features">
        <h1 class="min-title">Features</h1>
        <div class="conterner">
            <div class="box Quality">
                <div class="imag">
                    <img src={img1} alt=""/>
                </div>
                <h3>الجودة</h3>
                <p>يقدم موقعنا جودة وقيمة عالية يضيفها الى مستخدم الموقع لكي يتمتع بتجربة مستخدم ممتازة</p>
                <a href="">More</a>

            </div>
            <div class="box Time">
                <div class="imag">
                    <img src={img2} alt=""/>
                </div>
                <h3>الوقت</h3>
                <p>
                    الوقت هو العنصر الأساسي بالنسبة لنا ولأننا نحترم قيمة المستخدم نحرص على عدم أضاعة وقته
                </p>
                <a href="">More</a>

            </div>
            <div class="box Passion">
                <div class="imag">
                    <img src={img3} alt=""/>
                </div>
                <h3>الصلاحيات</h3>
                <p>الصلاحيات اللامحدودة في التحكم بأدق التفاصيل لأن التفاصيل هي مبدأنا وعالمنا </p>
                <a href="">More</a>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Features