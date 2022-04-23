import React, { useReducer, useState, useEffect } from 'react'
import { reducer } from './reducer'
import axios from 'axios'
import { PrefectureCheckBox } from './components/PrefectureCheckBox'
import { Charts } from './components/Charts'

export const END_POINT = 'https://opendata.resas-portal.go.jp'
export const KEY = { 'X-API-KEY': '2wzD3L1jmEIFcmF2LdkOTNLgdhlFHdpkrwXtOr2c' }

type Prefecture = {
  prefCode: number
  prefName: string
}

export const PopulationTransitionGraph = (): React.ReactElement => {
  const initialState: any[] = []
  const [state, dispatch] = useReducer(reducer, initialState)
  const [prefectures, setPrefectures] = useState<Prefecture[]>([
    { prefCode: 0, prefName: '' },
  ])

  useEffect(() => {
    axios
      .get(END_POINT + '/api/v1/prefectures', {
        headers: KEY,
      })
      .then((response) => {
        setPrefectures(response.data.result)
      })
  }, [])

  return (
    <>
      {prefectures.map((prefecture) => {
        return (
          <PrefectureCheckBox
            key={prefecture.prefCode}
            state={state}
            dispatch={dispatch}
            prefCode={prefecture.prefCode}
            prefName={prefecture.prefName}
          />
        )
      })}
      <Charts state={state} />
    </>
  )
}
