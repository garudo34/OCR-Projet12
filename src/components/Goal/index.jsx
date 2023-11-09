import './style.css'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

function Goal() {
  const data = [{ name: 'score', value: 0.3 }]

  return (
    <ResponsiveContainer>
      <RadialBarChart
        innerRadius='0%'
        outerRadius='0%'
        startAngle={90}
        endAngle={450}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: 'insideStart', fill: '#fff' }}
          background
          clockWise
          dataKey='value'
          data={[{ value: 1 }]}
          barSize={170}
          fill='#FFF'
          isAnimationActive={false}
        />
        <RadialBar
          dataKey='value'
          barSize={10}
          cornerRadius={100}
          fill='#FF0000'
        />
        <text
          x='50%'
          y='45%'
          style={{
            fontSize: 26,
            fontStyle: 'normal',
            fontWeight: 'bold',
            fill: '#282D30',
          }}
          width={200}
          scaleToFit={true}
          textAnchor='middle'
          verticalAnchor='middle'
        >
          {data[0].value && data[0].value * 100}%
        </text>
        <text
          x='50%'
          y='55%'
          style={{
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 'bold',
            fill: '#74798C',
          }}
          width={200}
          scaleToFit={true}
          textAnchor='middle'
          verticalAnchor='middle'
        >
          de votre
        </text>
        <text
          x='50%'
          y='65%'
          style={{
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 'bold',
            fill: '#74798C',
          }}
          width={200}
          scaleToFit={true}
          textAnchor='middle'
          verticalAnchor='middle'
        >
          objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default Goal
