export type PopulationData = {
  prefCode: number
  year: number
  population: number
}
export type STORE = Array<PopulationData>
export type ACTION = {
  type: 'ADD_POPULATION_DATA'
  newData: Array<PopulationData>
}

export const reducer = (state: any, action: ACTION) => {
  switch (action.type) {
    case 'ADD_POPULATION_DATA':
      return [...state, action.newData]
  }
}
