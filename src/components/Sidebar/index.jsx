import { Link } from 'react-router-dom'
import yoga from '../../assets/yoga-icon.svg'
import cycling from '../../assets/cycling-icon.svg'
import swimming from '../../assets/swimming-icon.svg'
import dumbbell from '../../assets/dumbbell-icon.svg'
import './style.css'

function Sidebar() {
  return (
    <aside className='sidebar'>
      <nav className='nav'>
        <Link to='/'>
          <img src={yoga} alt='Logo Sportsee' className='logo' />
        </Link>
        <Link to='/'>
          <img src={swimming} alt='Logo Sportsee' className='logo' />
        </Link>
        <Link to='/profil'>
          <img src={cycling} alt='Logo Sportsee' className='logo' />
        </Link>
        <Link to='/settings'>
          <img src={dumbbell} alt='Logo Sportsee' className='logo' />
        </Link>
      </nav>
      <p className='copyright'>Copyright, SportSee 2020</p>
    </aside>
  )
}
export default Sidebar
