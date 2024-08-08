import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './Body';
import Layout from './Layout';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import BookNow from './BookNow';
import MoreDetails from './MoreDetails';
import ContactUs from './ContactUs';
import LoginPage from './LoginPage';
import Panding from './panding';
import Conform from './Conform';
import DetailOrder from './DetailOrder';
import Messages from './messages';
import Forgot from './Forgot';
import ProtectedRoute from './ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Body />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/BookNow' element={<BookNow />}></Route>
        <Route path='/MoreDetails' element={<MoreDetails />}></Route>
        <Route path='/ContactUs' element={<ContactUs />}></Route>
        <Route path='/Login' element={<LoginPage />}></Route>

      </Route>
      <Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path='/PandingOrders' element={<Panding />}></Route>
        <Route path='/ConformOrders' element={<Conform />}></Route>
        <Route path='/Messages' element={<Messages />}></Route>
        <Route path='/PandingOrders/:id' element={<DetailOrder />}></Route>
        <Route path='/Login/Forgot' element={<Forgot />}></Route>
      </Route>

    </Routes>
  </BrowserRouter>
);
