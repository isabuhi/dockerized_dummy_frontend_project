import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface DataState {
  data: any
}
const initialState = {
  data: []
} as DataState;



export const data = createSlice({
  name: 'Data',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getDataAsync.fulfilled, (state, action) => {
      console.log(action)
      state.data = action.payload
    })
  },
});


export const getDataAsync = 
   createAsyncThunk(
    "data/asyncData",
    async ()=>{
      let tmpData;
      await axios.get("https://api.jsonbin.io/v3/b/62ed1523e13e6063dc6cd5ee")
    .then((data)=>{
      tmpData = data.data.record.posts_by_date
    })
    return tmpData
  })
    
  

export default data.reducer;
