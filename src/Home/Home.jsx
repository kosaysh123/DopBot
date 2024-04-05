import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { HashRouter  , Routes, Route } from "react-router-dom";
import MainHome from '../Pages/MainHome/MainHome';
import MainBotPage from '../Pages/MainBotPage/MainBotPage';

function Home() {
  return (
    <div style={{width:"100%" ,height:"100vh" , backgroundColor: "#263043eb"}}>
       <Routes>
    <Route path="/" exact={true} Component={MainHome} />
      <Route path="/page1" exact={true} Component={MainBotPage} />
      {/* <Route path="/page2" exact={true} Component={MainBotPage} /> */}
    </Routes>
    </div>
   
    
  )
}

export default Home