import { useState } from 'react'
import Signup from './Signup'
import Login from './login'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
