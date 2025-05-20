import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainPage from './pages/Home'
import Booking from './pages/Booking'

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/mainPage" />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  )
}
