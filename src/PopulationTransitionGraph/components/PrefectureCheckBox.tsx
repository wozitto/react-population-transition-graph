import React, { useState } from 'react'

type Props = {
  prefCode: number
  prefName: string
}

export const PrefectureCheckBox = ({
  prefCode,
  prefName,
}: Props): React.ReactElement => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        name={prefName}
      />
      {prefName}
    </label>
  )
}
