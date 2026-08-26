import {createSlice} from '@reduxjs/toolkit';
const slice=createSlice({name:'cart',initialState:[],reducers:{add:(s,a)=>{s.push(a.payload)},remove:(s,a)=>s.filter(x=>x.id!==a.payload)}});
export const {add,remove}=slice.actions; export default slice.reducer;
