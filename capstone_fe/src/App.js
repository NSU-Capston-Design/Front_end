import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Mainpage from './pages/Mainpage';
import Register from './pages/Register';
import Login from './pages/Login';
import Donation from './pages/Donation';
import FindId from './pages/FindId';
import Agreepage from './pages/Agreepage';
import Test from './pages/Test';
import Rank from './pages/Rank';
import Don_commu from './pages/Don_commu';
import Mypage from './pages/Mypage';
import Event from './pages/Event';
<<<<<<< HEAD
import Point from './pages/Point';
import Order_inquiry from './pages/Order_inquiry';
import Donation_details from './pages/Donation_details';
=======
import Product from './pages/Product';
import Product_Upload from './pages/Product_Upload';
>>>>>>> ec1fd51d7cf4c1c1c4374a763920fe83f6ef8eb9


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>   
        <Route path='/donation' element={<Donation/>}/> 
        <Route path='/findid' element={<FindId/>}/>
        <Route path='/agreepage' element={<Agreepage/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/rank' element={<Rank/>}/>
        <Route path='/don_commu' element={<Don_commu/>}/>
        <Route path='/mypage' element={<Mypage/>}/>
        <Route path='/event' element={<Event/>}/>
<<<<<<< HEAD
        <Route path='/point' element={<Point/>}/>
        <Route path='/order_inquiry' element={<Order_inquiry/>}/>
        <Route path='/donation_details' element={<Donation_details/>}/>
=======
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/upload' element={<Product_Upload/>}/>
>>>>>>> ec1fd51d7cf4c1c1c4374a763920fe83f6ef8eb9
      </Routes>
    </BrowserRouter>
  );
}

export default App;
