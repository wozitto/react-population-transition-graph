import React, { useReducer, useState, useEffect } from 'react'
import { reducer } from './reducer'
import axios from 'axios'
import { PrefectureCheckBox } from './components/PrefectureCheckBox'
import { Charts } from './components/Charts'
import styled from 'styled-components'

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
      <Header>POPULATION-TRANSITION-APP</Header>
      <PrefectureCheckBoxiesWrapper>
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
      </PrefectureCheckBoxiesWrapper>
      <Charts state={state} />
    </>
  )
}

const Header = styled.h1`
  margin: 0;
  color: #fff;
  background-color: #0969da;
`

const PrefectureCheckBoxiesWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`
