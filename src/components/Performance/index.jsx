import './style.css'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

function Performance() {
  const data = [
    { kind: 'Intensité', value: 200 },
    { kind: 'Vitesse', value: 240 },
    { kind: 'Force', value: 80 },
    { kind: 'Endurance', value: 80 },
    { kind: 'Energie', value: 220 },
    { kind: 'Cardio', value: 110 },
  ]

  return (
    <ResponsiveContainer>
      <RadarChart
        cx='50%'
        cy='50%'
        innerRadius='5%'
        outerRadius='80%'
        margin={{ top: 5, right: 15, bottom: 5, left: 15 }}
        data={data}
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
  )
}

export default Performance
