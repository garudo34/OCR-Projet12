import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'
// import Profil from './pages/Profil'
// import Settings from './pages/Settings'
// import Community from './pages/Community'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main className='content-wrapper'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/profil/:userId' element={<Profil />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/community' element={<Community />} /> */}
        </Routes>
      </main>
    </Router>
  </React.StrictMode>
)
