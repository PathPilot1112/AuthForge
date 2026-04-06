import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router'
import DashBoard from './components/DashBoard'
const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/" element={<DashBoard/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  )
}

export default App
