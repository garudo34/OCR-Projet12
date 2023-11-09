import './style.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function Session() {
  const data = [
    { day: 'L', sessionLength: 30 },
    { day: 'M', sessionLength: 40 },
    { day: 'M', sessionLength: 50 },
    { day: 'J', sessionLength: 30 },
    { day: 'V', sessionLength: 30 },
    { day: 'S', sessionLength: 50 },
    { day: 'D', sessionLength: 50 },
  ]

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
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
        <Tooltip />
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
  )
}

export default Session
