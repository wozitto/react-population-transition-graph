import React, { useState, Dispatch, useCallback } from 'react'
import axios from 'axios'
import { END_POINT, KEY } from '../index'
import {
  STORE,
  ADD_POPULATION_DATA_ACTION,
  REMOVE_POPULATION_DATA_ACTION,
} from '../reducer'

type Props = {
  state: STORE
  dispatch: Dispatch<ADD_POPULATION_DATA_ACTION | REMOVE_POPULATION_DATA_ACTION>
  prefCode: number
  prefName: string
}

export const PrefectureCheckBox = React.memo(
  ({ state, dispatch, prefCode, prefName }: Props): React.ReactElement => {
    const [isChecked, setIsChecked] = useState(false)
    const handleOnChange = useCallback((prefCode: number) => {
      if (isChecked) {
        const newState = state.filter((el) => {
          return el[0].prefCode != prefCode
        })
        dispatch({
          type: 'REMOVE_POPULATION_DATA',
          newState,
        })
      } else {
        axios
          .get(
            END_POINT +
              `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
            {
              headers: KEY,
            },
          )
          .then((response) => {
            const data: Array<{ year: number; value: number }> =
              response.data.result.data[0].data
            const newData = data.map(({ year, value: population }) => ({
              year,
              population,
              prefCode,
            }))
            dispatch({
              type: 'ADD_POPULATION_DATA',
              newData: newData,
            })
          })
      }
      setIsChecked(!isChecked)
    }, [prefCode, isChecked])
    return (
      <label style={{ marginRight: '8px' }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleOnChange(prefCode)}
          name={prefName}
        />
        {prefName}
      </label>
    )
  },
)
