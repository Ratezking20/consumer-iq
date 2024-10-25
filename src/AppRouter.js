import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Test from './Test'
import Donations from './Donations'



export default function AppRoute() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/test' element={<Test />} />
                <Route path='/donations' element={<Donations />} />
            </Routes>
        </BrowserRouter>
    )
}