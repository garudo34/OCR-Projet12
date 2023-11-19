import { useFetch as useFetchApi } from '../../services/api'
import { useFetch as useFetchDataMocked } from '../../services/mockedApi'
import Loader from '../Loader/loader'
import ErrorMessage from '../ErrorMessage/errormessage'
import ActivityModel from '../../Models/Activity'
import './activity.css'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function Activity({ userId }) {
  // Fetch API
  const { isLoading, data, error } = useFetchApi(
    `http://localhost:3000/user/${userId}/activity`
  )

  // Fetch MockedData
  // const { isLoading, data, error } = useFetchDataMocked('activity.json', userId)

  // Modélisation des données
  const formatedData = new ActivityModel(data)
  // Récupération des données
  const activity = formatedData.sessions || []

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && !error && (
        <ResponsiveContainer>
          <BarChart
            data={activity}
            barSize={7}
            barGap={8}
            margin={{ top: 20, right: 5, bottom: 5, left: 5 }}
          >
            <CartesianGrid strokeDasharray='3' vertical={false} />

            <XAxis
              dataKey='day'
              tick={{ fill: '#9B9EAC' }}
              tickLine={false}
              stroke='#DEDEDE'
              strokeWidth={2}
              tickMargin={15}
            />
            <YAxis
              yAxisId='kilogram'
              orientation='right'
              tickMargin={20}
              tick={{ fill: '#9B9EAC' }}
              tickLine={false}
              axisLine={false}
              domain={['dataMin-2', 'dataMax+1']}
              tickCount={3}
            />
            <YAxis hide yAxisId='calories' />
            <Tooltip
              cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
              content={<CustomToolTip />}
            />
            <Bar
              name='Poids (kg)'
              dataKey='kilogram'
              yAxisId='kilogram'
              fill='#282D30'
              radius={[3, 3, 0, 0]}
            />
            <Bar
              name='Calories brûlées (kCal)'
              dataKey='calories'
              yAxisId='calories'
              fill='#E60000'
              radius={[3, 3, 0, 0]}
            />

            <Legend
              align='right'
              verticalAlign='top'
              iconSize={9}
              iconType='circle'
              formatter={(value, entry, index) => (
                <span className='text-grey'>{value}</span>
              )}
              wrapperStyle={{
                left: 0,
                top: 20,
                paddingBottom: 65,
              }}
            />
            <text
              x='5%'
              y='10%'
              dy={+12}
              style={{
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
                fill: '#20253A',
              }}
            >
              Activité quotidienne
            </text>
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  )
}

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <ul className='activity-custom-tooltip'>
        <li className='activity-custom-tooltip-kilogram'>{`${payload[0].value} kg`}</li>
        <li className='activity-custom-tooltip-calories'>{`${payload[1].value} kCal`}</li>
      </ul>
    )
  }
  return null
}

export default Activity
