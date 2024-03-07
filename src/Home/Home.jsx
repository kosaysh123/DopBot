import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { HashRouter  , Routes, Route } from "react-router-dom";
import Page1 from '../Pages/Page1/Page1';
import Page2 from '../Pages/Page2/Page2';
import MainHome from '../Pages/MainHome/MainHome';

function Home() {
  return (
    
    <Routes>
    <Route path="/" exact={true} Component={MainHome} />
      <Route path="/page1" exact={true} Component={Page1} />
      <Route path="/page2" exact={true} Component={Page2} />
    </Routes>
    
  )
}

export default Home