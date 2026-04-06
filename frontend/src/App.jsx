import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router'
import DashBoard from './components/DashBoard'
import PrivateRoute from './PrivateROute'
const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={
                <PrivateRoute>

                    <DashBoard/>
                </PrivateRoute>
                } />
        </Routes>
    </div>
  )
}

export default App
