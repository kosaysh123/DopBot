import React from 'react';
import './style.css'
import img1 from './photo/ranking.png';
import img2 from './photo/credit-card.png';
import img3 from './photo/shining.png';
import img4 from './photo/fame.png';
function Ratting() {
  return (
    
    <section class="perant">
        <div class="child-1">
            <div class="photo-div">
                <img src={img1} alt="rank" height="50px"/>
                <span class="rank ">Rank</span>
            </div>
            <div class="rank-div">
                <span class="num">#51</span>
            </div>
        </div> 
    
        <div class="child-2">
            <div class="photo-div">
                <img src={img2} alt="credit" height="50px"/>
                <span class="credit">Credits</span>
            </div>
            <div class="credit-div">
                <span class="num">3</span>
            </div>
        </div> 
    
        <div class="child-3">
            <div class="photo-div">
                <img src={img3} alt="points" height="50px"/>
                <span class="points">Points</span>
            </div>
            <div class="points-div">
                <span class="num">1500 Points</span>
            </div>
        </div> 
    
        <div class="child-4">
            <div class="photo-div">
                <img src={img4} alt="rank" height="50px"/>
                <span class="reputation">Reputation</span>
            </div>
            <div class="repu-div">
                <span class="num">30</span>
            </div>
        </div> 
    </section>
    
   
  )
}

export default Ratting
