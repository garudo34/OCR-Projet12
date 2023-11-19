import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

import './header.css'
import { useState } from 'react'

function Header() {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }
  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <div className='navbar__logo'>
        <Link to='/'>
          <img src={Logo} alt='Logo Sportsee' />
        </Link>
      </div>

      <ul className='navbar__links'>
        <li className='navbar__item slideInDown-1'>
          <Link to='/' className='navbar__link'>
            Accueil
          </Link>
        </li>
        <li className='navbar__item slideInDown-2'>
          <Link to='/profil' className='navbar__link'>
            Profil
          </Link>
        </li>
        <li className='navbar__item slideInDown-3'>
          <Link to='/settings' className='navbar__link'>
            Réglages
          </Link>
        </li>
        <li className='navbar__item slideInDown-4'>
          <Link to='/community' className='navbar__link'>
            Communauté
          </Link>
        </li>
      </ul>
      <button className='navbar__burger' onClick={handleShowLinks}>
        <span className='burger__bar'></span>
      </button>
    </nav>
  )
}
export default Header
