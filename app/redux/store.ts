import {combineReducers, configureStore} from '@reduxjs/toolkit'
import flowerReducer from './FlowerSlice'
import searchReducer from './SearchSlice'
import tokenReducer from './TokenSlice'

const rootReducer = combineReducers({
    flowerReducer,
    searchReducer,
    tokenReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
