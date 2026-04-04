import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router'
const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/" element={<Login/>} />
        </Routes>
    </div>
  )
}

export default App
