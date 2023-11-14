import { useFetch as useFetchApi } from '../../services/api'
import { useFetch as useFetchDataMocked } from '../../services/mockedApi'

import PerformanceModel from '../../Models/Performance'
import './style.css'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'

function Performance({ userId }) {
  const { isLoading, data, error } = useFetchApi(
    `http://localhost:3000/user/${userId}/performance`
  )

  // const { isLoading, data, error } = useFetchDataMocked('performance.json', userId)

  const formatedData = new PerformanceModel(data)
  const performance = formatedData.data || []

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && (
        <ResponsiveContainer>
          <RadarChart
            cx='50%'
            cy='50%'
            innerRadius='5%'
            outerRadius='60%'
            margin={{ top: 5, right: 15, bottom: 5, left: 15 }}
            data={performance}
          >
            <PolarGrid radialLines={false} stroke='rgba(255, 255, 255, 0.9)' />
            <PolarAngleAxis
              dataKey='kind'
              stroke='rgba(255, 255, 255, 0.9)'
              tickLine={false}
              tick={{
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 700,
              }}
            />
            <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
            <Radar dataKey='value' fill='#FF0101' fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  )
}

export default Performance
