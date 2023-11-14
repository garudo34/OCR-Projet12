import { useFetch as useFetchApi } from '../../services/api'
import { useFetch as useFetchDataMocked } from '../../services/mockedApi'

import SessionModel from '../../Models/Session'

import Loader from '../Loader'

import './style.css'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from 'recharts'
import { useEffect, useState } from 'react'

function Session({ userId }) {
  // const { isLoading, data, error } = useFetchApi(
  //   `http://localhost:3000/user/${userId}/average-sessions`
  // )
  const { isLoading, data, error } = useFetchDataMocked('session.json', userId)

  const formatedData = new SessionModel(data)
  const sessions = formatedData.sessions || []
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  sessions.map((session) => {
    return (session.day = days[session.day - 1])
  })

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {!isLoading && (
        <ResponsiveContainer>
          <LineChart
            data={sessions}
            margin={{ top: 50, right: 15, bottom: 30, left: 15 }}
          >
            <XAxis
              dataKey='day'
              stroke='rgba(255, 255, 255, 0.6)'
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              dataKey='sessionLength'
              stroke='rgba(255, 255, 255, 0.9)'
              hide={true}
              domain={['dataMin - 5', 'dataMax + 15']}
            />

            <Line
              dataKey='sessionLength'
              type='monotone'
              stroke='rgba(255, 255, 255, 0.6)'
              strokeWidth={2}
              dot={false}
              activeDot={{
                stroke: 'rgba(255,255,255, 0.6)',
                strokeWidth: 10,
                r: 5,
              }}
            />
            <Tooltip content={<CustomToolTip />} cursor={<CustomCursor />} />
            <text
              x='10%'
              y='10%'
              dy={+12}
              style={{
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
                opacity: 0.504,
                fill: '#FFF',
              }}
            >
              Durée moyenne des
            </text>
            <text
              x='10%'
              y='20%'
              dy={+12}
              style={{
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 700,
                opacity: 0.504,
                fill: '#FFF',
              }}
            >
              sessions
            </text>
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  )
}

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='session-custom-tooltip'>
        <div>{payload[0].value + ' min'}</div>
      </div>
    )
  }
  return null
}

const CustomCursor = (props) => {
  const { points, width, height } = props
  const { x, y } = points[0]

  return (
    <Rectangle
      fill='rgba(0, 0, 0, 0.1)'
      stroke='rgba(0, 0, 0, 0.1)'
      x={x}
      y={y - 50}
      width={width}
      height={height + 110}
    />
  )
}

export default Session
