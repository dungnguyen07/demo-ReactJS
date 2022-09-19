import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';

import Home from './screens/Home';
import Login from './screens/Login';
import FlashSale from './screens/FlashSale';
import Register from './screens/Register';
import Detail from './screens/Detail';
import Cart from './screens/Cart';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/flashsale' element={<FlashSale />} />
                <Route path='/register' element={<Register />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

