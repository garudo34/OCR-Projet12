import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header/header'
import Sidebar from './components/Sidebar/sidebar'
import Home from './pages/Home/home'
import Profil from './pages/Profil/profil'

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
