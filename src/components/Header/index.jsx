import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

import './style.css'

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={Logo} alt='Logo Sportsee' className='logo' />
      </Link>

      <nav className='nav'>
        <Link to='/'>Accueil</Link>
        <Link to='/profil'>Profil</Link>
        <Link to='/settings'>Réglage</Link>
        <Link to='/community'>Communauté</Link>
      </nav>
    </header>
  )
}
export default Header
