import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PrefectureCheckBox } from './components/PrefectureCheckBox'

const END_POINT = 'https://opendata.resas-portal.go.jp'
const KEY = { 'X-API-KEY': '2wzD3L1jmEIFcmF2LdkOTNLgdhlFHdpkrwXtOr2c' }

type Prefecture = {
  prefCode: number
  prefName: string
}

export const PopulationTransitionGraph = () => {
  const [prefectures, setPrefectures] = useState<[Prefecture]>([
    { prefCode: 0, prefName: '' },
  ])

  useEffect(() => {
    axios
      .get(END_POINT + '/api/v1/prefectures', {
        headers: KEY,
      })
      .then((response) => {
        console.log(response.data.result)
        setPrefectures(response.data.result)
      })
  }, [])

  return (
    <>
      {prefectures.map((prefecture) => {
        return (
          <PrefectureCheckBox
            key={prefecture.prefCode}
            prefCode={prefecture.prefCode}
            prefName={prefecture.prefName}
          />
        )
      })}
    </>
  )
}
