import logo from './logo.svg';
import './App.css';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {useReducer} from 'react';
import {createContext} from 'react';
import Child from './Child';
import CompA from './CompA';
const Data = createContext();

function App() {

  function Reducer(state,action){
  if(action.type === "inc"){
    return state + 1;
  }
  }
  const [state,dispatch]= useReducer(Reducer,0);

 const [sum,setsum]=useState(0);
 const [minus,setminus]=useState(90); 
 const multy = useMemo(()=>{
  console.log("call multy");
  return sum*10;
 },[sum])
const [ch,setch]=useState(0);
 const printlog=useCallback(()=>{
  console.log("child is called by parent");
 },[ch])
  return (
    <>
    <p>{state}</p>
    <button onClick={()=>{dispatch({type:"inc"})}}>inc</button>
   <Data.Provider value={{name:"vismay",add:"mehsana"}}>
   <CompA/>
   </Data.Provider>
   <button onClick={()=>{setsum(sum+1)}}>+</button>
   <h1>{sum}</h1>
   <br></br>
    {multy}
   <br></br>
   <button onClick={()=>{setminus(minus-1)}}>-</button>
   <h1>{minus}</h1>
   <button onClick={()=>{setch(ch+1)}}>ch</button>
   <Child printlog={printlog}/>
    </>
  );
}

export default App;
export {Data};
