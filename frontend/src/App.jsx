import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/MovieList'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from './pages/Home'
export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/mainPage" />} />
        <Route path="/mainPage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}
