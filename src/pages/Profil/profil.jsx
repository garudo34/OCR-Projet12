import { useFetch as useFetchApi } from '../../services/api'
import { useFetch as useFetchDataMocked } from '../../services/mockedApi'

import { useParams } from 'react-router-dom'

import Loader from '../../components/Loader/loader'
import KeyDataCard from '../../components/KeyDataCard/keydatacard'
import Activity from '../../components/Activity/activity'
import Session from '../../components/Session/session'
import Performance from '../../components/Performance/performance'
import Goal from '../../components/Goal/goal'

import caloriesIcon from '../../assets/calories-icon.svg'
import carbsIcon from '../../assets/carbs-icon.svg'
import fatIcon from '../../assets/fat-icon.svg'
import proteinIcon from '../../assets/protein-icon.svg'

import './profil.css'

import UserModel from '../../Models/User'
import Welcome from '../../components/Welcome/welcome'
import ErrorMessage from '../../components/ErrorMessage/errormessage'

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
              <div className='profil-content-activity'>
                <Activity userId={userId} />
              </div>
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
