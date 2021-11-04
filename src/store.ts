import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { mainReducer } from './reducers/mainSlice'

const reducers = {
  mainStore: mainReducer,
};

const rootReducer = combineReducers(reducers);

const store = configureStore({
  reducer: rootReducer
})

export default store;

export type RootState = ReturnType<typeof store.getState>;