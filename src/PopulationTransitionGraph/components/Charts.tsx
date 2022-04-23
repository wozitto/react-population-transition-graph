import React from 'react'
import { STORE } from '../reducer'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
import randomcolor from 'randomcolor'

type Props = {
  state: Array<STORE>
}

export const Charts = ({ state }: Props): React.ReactElement => {
  console.log(state)
  const prefectures = [
    '北海道',
    '青森県',
    '岩手県',
    '宮城県',
    '秋田県',
    '山形県',
    '福島県',
    '茨城県',
    '栃木県',
    '群馬県',
    '埼玉県',
    '千葉県',
    '東京都',
    '神奈川県',
    '新潟県',
    '富山県',
    '石川県',
    '福井県',
    '山梨県',
    '長野県',
    '岐阜県',
    '静岡県',
    '愛知県',
    '三重県',
    '滋賀県',
    '京都府',
    '大阪府',
    '兵庫県',
    '奈良県',
    '和歌山県',
    '鳥取県',
    '島根県',
    '岡山県',
    '広島県',
    '山口県',
    '徳島県',
    '香川県',
    '愛媛県',
    '高知県',
    '福岡県',
    '佐賀県',
    '長崎県',
    '熊本県',
    '大分県',
    '宮崎県',
    '鹿児島県',
    '沖縄県',
  ]
  const data = [
    { name: 1960, 人口: 400 },
    { name: 1965, 人口: 300 },
    { name: 1970, 人口: 340 },
    { name: 1975, 人口: 300 },
    { name: 1980, 人口: 20 },
    { name: 1985, 人口: 250 },
    { name: 1990, 人口: 250 },
    { name: 1995, 人口: 250 },
    { name: 2000, 人口: 250 },
    { name: 2005, 人口: 250 },
    { name: 2010, 人口: 250 },
  ]
  const data2 = [
    { name: 1960, 人口: 400 },
    { name: 1965, 人口: 300 },
    { name: 1970, 人口: 330 },
    { name: 1975, 人口: 200 },
    { name: 1980, 人口: 200 },
    { name: 1985, 人口: 550 },
    { name: 1990, 人口: 650 },
    { name: 1995, 人口: 850 },
    { name: 2000, 人口: 350 },
    { name: 2005, 人口: 250 },
    { name: 2010, 人口: 250 },
  ]
  const data3 = [
    { name: 1960, 人口: 500, test: 5000 },
    { name: 1965, 人口: 600, test: 6000 },
    { name: 1970, 人口: 530, test: 5030 },
    { name: 1975, 人口: 500, test: 5000 },
    { name: 1980, 人口: 300, test: 3000 },
    { name: 1985, 人口: 550, test: 5050 },
    { name: 1990, 人口: 650, test: 6050 },
    { name: 1995, 人口: 850, test: 8050 },
    { name: 2000, 人口: 850, test: 8050 },
    { name: 2005, 人口: 250, test: 2050 },
    { name: 2010, 人口: 250, test: 2050 },
  ]
  return (
    <div style={{ width: '85%', height: '600px', margin: '0 auto' }}>
      <ResponsiveContainer height="80%">
        {/* <LineChart margin={{ left: 50 }}>
          <XAxis dataKey="name" />
          <YAxis />
          {state.map((pref) => {
            return (
              <Line
                data={pref}
                type="monotone"
                dataKey="人口"
                stroke="#8884d8"
                key={pref.人口}
              />
            )
          })}
          <Line data={data} type="monotone" dataKey="人口" stroke="#8884d8" />
          <Line data={data2} type="monotone" dataKey="人口" stroke="#000" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
        </LineChart> */}
        <LineChart margin={{ left: 50, right: 50 }}>
          <XAxis type="number" dataKey="year" domain={['auto', 'auto']} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend name="test" />
          {/* {console.log(prefectures[state[1].prefCode - 1])} */}
          {state.map(
            (
              prefecture: Array<{
                prefCode: number
                year: number
                population: number
              }>,
            ) => {
              return <Line key={prefecture[0].population} type="monotone" data={prefecture} dataKey="population" stroke={randomcolor()} name={prefectures[prefecture[0].prefCode - 1]} />
            },
          )}
          {/* <Line type="monotone" data={data} dataKey="人口" stroke="#8884d8" />
          <Line type="monotone" data={data2} dataKey="人口" stroke="#82ca9d" />
          <Line type="monotone" data={data3} dataKey="人口" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
