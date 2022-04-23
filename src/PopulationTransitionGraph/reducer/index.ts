export type PopulationData = {
  prefCode: number
  year: number
  population: number
}
export type STORE = Array<PopulationData>
export type ADD_POPULATION_DATA_ACTION = {
  type: 'ADD_POPULATION_DATA'
  newData: Array<PopulationData>
}
export type REMOVE_POPULATION_DATA_ACTION = {
  type: 'REMOVE_POPULATION_DATA'
  newState: Array<STORE>
}

export const reducer = (
  state: any,
  action: ADD_POPULATION_DATA_ACTION | REMOVE_POPULATION_DATA_ACTION,
) => {
  switch (action.type) {
    case 'ADD_POPULATION_DATA':
      return [...state, action.newData]
    case 'REMOVE_POPULATION_DATA':
      return [...action.newState]
  }
}
