import React, { useState, Dispatch } from 'react'
import axios from 'axios'
import { END_POINT, KEY } from '../index'
import {
  ADD_POPULATION_DATA_ACTION,
  REMOVE_POPULATION_DATA_ACTION,
} from '../reducer'

type Props = {
  dispatch: Dispatch<ADD_POPULATION_DATA_ACTION | REMOVE_POPULATION_DATA_ACTION>
  prefCode: number
  prefName: string
}

export const PrefectureCheckBox = React.memo(
  ({ dispatch, prefCode, prefName }: Props): React.ReactElement => {
    const [isChecked, setIsChecked] = useState(false)
    const handleOnChange = (prefCode: number) => {
      if (isChecked) {
        dispatch({
          type: 'REMOVE_POPULATION_DATA',
          prefCode,
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
    }
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
