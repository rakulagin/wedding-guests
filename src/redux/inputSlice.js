import {createSlice} from "@reduxjs/toolkit";

const firstSlice = createSlice({
  name: 'searchText',
  initialState: {
    text: ''
  },
  reducers: {
    write (state, action) {
      // state.text.push(action.payload)
      console.log('state= ', state)
      console.log('action = ', action)
    },
    // clear (state, action) {},
  }
})

export const {write} = firstSlice.actions

export default firstSlice.reducer