import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import Ratting from '../../Ratting/Ratting';
import "./MainHome.css"
import Features from '../../Features/Features';
function MainHome() {
  return (
    <div>
<main className='main-container'>
        <div className='main-title'>
        <h1 class="ander ">Dashboard</h1>
        </div>
    <Ratting/>
    <Features/>
    </main>
    </div>
  )
}

export default MainHome