import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Profil from './pages/Profil'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Header />
    <main className='content-wrapper'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profil/:userId' element={<Profil />} />
      </Routes>
    </main>
  </Router>
)
