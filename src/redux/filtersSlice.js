import {createSlice} from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    sideFilter: 'all',
    activityFilter: 'all',
    weightFilter: 'all',
    historyFilter: 'all',
    tableFilter: 'all',
  },
  reducers: {
    changeSide (state, action) {
      state.sideFilter = action.payload
    },
    changeActivity (state, action) {
      state.activityFilter = action.payload
    },
    changeWeight (state, action) {
      state.weightFilter = action.payload
    },
    changeHistory (state, action) {
      state.historyFilter = action.payload
    },
    changeTable (state, action) {
      state.tableFilter = action.payload
    },
    clearAll (state) {
      state.sideFilter = 'all'
      state.activityFilter = 'all'
      state.weightFilter = 'all'
      state.historyFilter = 'all'
      state.tableFilter = 'all'
    },
  }
})

export const {changeSide, changeActivity, changeWeight, changeHistory, changeTable, clearAll} = filtersSlice.actions

export default filtersSlice.reducer