import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'Todo',
  initialState: ['Gym', 'Study Redux'],
  reducers: {}
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})