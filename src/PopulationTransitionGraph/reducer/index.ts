export type STORE = { activeIndex: number }
export type ACTION = { type: 'SET_INDEX'; newIndex: number }

export const reducer = (state: STORE, action: ACTION) => {
  switch (action.type) {
    case 'SET_INDEX':
      return { activeIndex: action.newIndex }
  }
}
