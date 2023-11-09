import './style.css'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Text,
  ResponsiveContainer,
} from 'recharts'

function Activity() {
  const data = [
    {
      day: '2020-07-01',
      kilogram: 70,
      calories: 240,
    },
    {
      day: '2020-07-02',
      kilogram: 69,
      calories: 220,
    },
    {
      day: '2020-07-03',
      kilogram: 70,
      calories: 280,
    },
    {
      day: '2020-07-04',
      kilogram: 70,
      calories: 500,
    },
    {
      day: '2020-07-05',
      kilogram: 69,
      calories: 160,
    },
    {
      day: '2020-07-06',
      kilogram: 69,
      calories: 162,
    },
    {
      day: '2020-07-07',
      kilogram: 69,
      calories: 390,
    },
  ]
  return (
    <ResponsiveContainer height='90%'>
      <BarChart
        data={data}
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
          tickFormatter={(day) => new Date(day).getDate()}
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
  )
}

export default Activity
