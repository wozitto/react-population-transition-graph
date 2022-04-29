export type PopulationData = {
  prefCode: number
  year: number
  population: number
}
export type PopulationDatas = Array<PopulationData>
export type STORE = Array<PopulationDatas>
export type ADD_POPULATION_DATA_ACTION = {
  type: 'ADD_POPULATION_DATA'
  newData: PopulationDatas
}
export type REMOVE_POPULATION_DATA_ACTION = {
  type: 'REMOVE_POPULATION_DATA'
  prefCode: number
}

export const reducer = (
  state: STORE,
  action: ADD_POPULATION_DATA_ACTION | REMOVE_POPULATION_DATA_ACTION,
) => {
  switch (action.type) {
    case 'ADD_POPULATION_DATA':
      return [...state, action.newData]
    case 'REMOVE_POPULATION_DATA':
      return [...state.filter((el) => el[0].prefCode != action.prefCode)]
  }
}
