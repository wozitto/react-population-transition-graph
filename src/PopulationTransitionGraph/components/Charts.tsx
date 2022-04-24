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
import styled from 'styled-components'
import { devices } from '../../devices'

type Props = {
  state: STORE
}

export const Charts = React.memo(({ state }: Props): React.ReactElement => {
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
  return (
    <ChartsWrapper>
      <ResponsiveContainer>
        <LineChart margin={{ left: 32}}>
          <XAxis type="number" dataKey="year" domain={['auto', 'auto']} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {state.map(
            (
              prefecture: Array<{
                prefCode: number
                year: number
                population: number
              }>,
            ) => {
              return (
                <Line
                  key={prefecture[0].population}
                  type="monotone"
                  data={prefecture}
                  dataKey="population"
                  stroke={randomcolor()}
                  name={prefectures[prefecture[0].prefCode - 1]}
                />
              )
            },
          )}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </ChartsWrapper>
  )
})

const ChartsWrapper = styled.div`
  width: 95%;
  height: 600px;
  margin: 0 auto;
  @media ${devices.desktop} {
    width: 85%;
  }
`
