import React, {useEffect, useRef} from 'react';
import './input.css';
import SideBar from './components/sidebar';
import Table from './components/table';
import { useAppDispatch } from "../src/app/hooks";
import {  getDataAsync } from "./features/data/counterSlice";

function App() {
  const dispatch = useAppDispatch()
  const refSidebar  = useRef(null)
  
  useEffect(()=>{
    dispatch(getDataAsync())
  },[])


  return (
    <div className='flex flex-row overflow-scroll relative'>
      <SideBar refx = {refSidebar}/>
      <Table refx = {refSidebar}/>
    </div>
  );
}

export default App;
