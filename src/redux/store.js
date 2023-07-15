import {configureStore} from "@reduxjs/toolkit";
import textInputReducer from './inputFilterSlice'
import filtersReducer from './filtersSlice'


const store = configureStore({
  reducer: {
    textInputReducer: textInputReducer,
    filters: filtersReducer,
  }
})

export default store
