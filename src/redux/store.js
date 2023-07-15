import {configureStore} from "@reduxjs/toolkit";
import firstReducer from './inputSlice'


const store = configureStore({
  reducer: {
    inputInStoreFromSlice: firstReducer,
  }
})

export default store
