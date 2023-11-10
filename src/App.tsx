import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedPages from './components/ProtectedPages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProtectedPages />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
