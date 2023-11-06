import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import KeyDataCard from '../../components/KeyDataCard'
import caloriesIcon from '../../assets/calories-icon.svg'
import carbsIcon from '../../assets/carbs-icon.svg'
import fatIcon from '../../assets/fat-icon.svg'
import proteinIcon from '../../assets/protein-icon.svg'
import './index.css'

function Profil() {
  document.title = 'Accueil - SportSee'

  const { userId } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        let actualData = await response.json()
        setData(actualData)
        setError(null)
        console.log(data)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return (
    <div className='profil-main'>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

      {data && (
        <>
          <div className='profil-header'>
            <h1 className='profil-header-hello'>
              Bonjour{' '}
              <span className='text-red'>{data.data.userInfos.firstName}</span>
            </h1>
            <h2 className='profil-header-congrats'>
              Félicitations ! Vous avez explosé vos objectifs hier 👏
            </h2>
          </div>
          <div className='profil-content'>
            <div className='profil-key-data'>
              <KeyDataCard
                iconUrl={caloriesIcon}
                text={data.data.keyData.calorieCount}
                smalltext='Calories'
                unit='kCal'
              />
              <KeyDataCard
                iconUrl={proteinIcon}
                text={data.data.keyData.proteinCount}
                smalltext='Proteines'
                unit='g'
              />
              <KeyDataCard
                iconUrl={carbsIcon}
                text={data.data.keyData.carbohydrateCount}
                smalltext='Glucides'
                unit='g'
              />
              <KeyDataCard
                iconUrl={fatIcon}
                text={data.data.keyData.lipidCount}
                smalltext='Lipides'
                unit='g'
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Profil
