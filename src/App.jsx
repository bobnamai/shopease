import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import NavBar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import AdminPortal from './pages/AdminPortal'

const sampleProducts = [
  {
    id: 1,
    name: 'House Blend Coffee',
    price: 14.99,
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Espresso Roast',
    price: 16.5,
    imageUrl: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Ceramic Coffee Mug',
    price: 12.0,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Pour-Over Coffee Dripper',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'French Press',
    price: 32.0,
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Cold Brew Blend',
    price: 15.75,
    imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
  },
]

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={sampleProducts} />} />
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
