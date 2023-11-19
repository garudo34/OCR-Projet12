import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

function Goal({ score }) {
  const data = [{ name: 'score', value: score }]

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
          textAnchor='middle'
        >
          {score && score * 100}%
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
          textAnchor='middle'
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
          textAnchor='middle'
        >
          objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default Goal
