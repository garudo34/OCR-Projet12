import './welcome.css'

function Welcome({ username }) {
  return (
    <div className='profil-header'>
      <h1 className='profil-header-hello'>
        Bonjour <span className='text-red'>{username}</span>
      </h1>
      <h2 className='profil-header-congrats'>
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  )
}

export default Welcome
