import { useFetch as useFetchApi } from '../../services/api'
import { useFetch as useFetchDataMocked } from '../../services/mockedApi'

import { useParams } from 'react-router-dom'

import Loader from '../../components/Loader'
import KeyDataCard from '../../components/KeyDataCard'
import Activity from '../../components/Activity'
import Session from '../../components/Session'
import Performance from '../../components/Performance'
import Goal from '../../components/Goal'

import caloriesIcon from '../../assets/calories-icon.svg'
import carbsIcon from '../../assets/carbs-icon.svg'
import fatIcon from '../../assets/fat-icon.svg'
import proteinIcon from '../../assets/protein-icon.svg'

import './styles.css'

import UserModel from '../../Models/User'
import Welcome from '../../components/Welcome'
import ErrorMessage from '../../components/ErrorMessage'

function Profil() {
  document.title = 'SportSee - Dashboard'

  const { userId } = useParams()
  // Fetch with API
  // const { isLoading, data, error } = useFetchApi(
  //   `http://localhost:3000/user/${userId}`
  // )
  // Fetch with DataMocked
  const { isLoading, data, error } = useFetchDataMocked(`user.json`, userId)
  const formatedData = new UserModel(data)
  const userInfos = formatedData.userInfos
  const keyData = formatedData.keyData
  const score = formatedData.score

  return (
    <div className='profil-main'>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && (
        <div className='profil-container'>
          {userInfos && <Welcome username={userInfos.firstName} />}
          <div className='profil-content'>
            <div className='profil-content-charts'>
              <div className='profil-content-primary'>
                <div className='profil-content-activity'>
                  <Activity userId={userId} />
                </div>
              </div>
              <div className='profil-content-secondary'>
                <div className='profil-content-session'>
                  <Session userId={userId} />
                </div>
                <div className='profil-content-performance'>
                  <Performance userId={userId} />
                </div>
                <div className='profil-content-goal'>
                  {score && <Goal score={score} />}
                </div>
              </div>
            </div>
            {keyData && (
              <div className='profil-key-data'>
                <KeyDataCard
                  iconUrl={caloriesIcon}
                  text={keyData.calorieCount}
                  smalltext='Calories'
                  unit='kCal'
                />
                <KeyDataCard
                  iconUrl={proteinIcon}
                  text={keyData.proteinCount}
                  smalltext='Proteines'
                  unit='g'
                />
                <KeyDataCard
                  iconUrl={carbsIcon}
                  text={keyData.carbohydrateCount}
                  smalltext='Glucides'
                  unit='g'
                />
                <KeyDataCard
                  iconUrl={fatIcon}
                  text={keyData.lipidCount}
                  smalltext='Lipides'
                  unit='g'
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Profil
