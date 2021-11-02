import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import farmsReducer from './farms'
import poolsReducer from './pools'
import pricesReducer from './prices'
// import teamsReducer from './teams'
import achievementsReducer from './achievements'
import blockReducer from './block'
import swap from './swap/reducer'
import user from './user/reducer'
import lists from './lists/reducer'
import multicall from './multicall/reducer'
import transactions from './transactions/reducer'
import mint from './mint/reducer'
import burn from './burn/reducer'
// import maximusReducer from './maximus'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    achievements: achievementsReducer,
    block: blockReducer,
    farms: farmsReducer,
    pools: poolsReducer,
    prices: pricesReducer,
    swap,
    // teams: teamsReducer,
    // maximus: maximusReducer,
    user,
    lists,
    multicall,
    transactions,
    burn,
    mint,
  },
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
