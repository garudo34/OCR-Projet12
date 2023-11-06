import { Link } from 'react-router-dom'
import './index.css'

function Home() {
  return (
    <main className='home-main'>
      <div className='form-profil-selection'>
        <h1>Sélectionnez un profil</h1>
        <div className='btn-group'>
          <Link className='btn' to='/profil/12'>
            Karl
          </Link>

          <Link className='btn' to='/profil/18'>
            Cécilia
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home
