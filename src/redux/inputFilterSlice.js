import {createSlice} from "@reduxjs/toolkit";

const inputFilterSlice = createSlice({
  name: 'searchText',
  initialState: {
    text: ''
  },
  reducers: {
    write (state, action) {
      state.text = action.payload
    },
    clear (state) {
      state.text=''
    },
  }
})

export const {write, clear} = inputFilterSlice.actions

export default inputFilterSlice.reducer