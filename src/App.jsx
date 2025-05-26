
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const [count,setCount] = useState(0);
  const [total,setTotal] = useState(0);

  // first -> what you want to do in this useeffect 
  // second -> what you want to perform after the useeffect functino ( clean up function )
  // third -> all the dependencies ( comma seprated on which this useeffect will trigger you can pass empty also )
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  setCount

  // Now useeffect can use in more ways 
  // 1 - variations 
  // useEffect(() => {
  // alert("it will call on each time when it will render");
  // //this will run on each time becaus we dont have pass any dependency here 
  // });


  // 2- variation 2setCount

  // useEffect(() => {
  //   alert("it will run only for the first render")    ;
  //   //It will call only once at first time 
  // }, [])


  // variation 3 
  // useEffect(() => {
  //   alert('it will run each time when count value willupdate');
  //   //it will run each time when count value is changed 
  // }, [count])

  // variation 4 
  // useEffect(() => {
  //     alert("it will run when count and total value will change");
  //     //because we have multiple depencies in third option of use effect
  // }, [count,total])
  
  // cleanup function 

  useEffect(() => {
    alert('i will run when you change the count value')
  
    return () => {
      alert('i will run when you change the count value but before rendering new value')
    }
  }, [count])
  

  
  
  
  
  function Incr(){
      setCount(count+1);
  }

  function SetTt(){
    setTotal(total+1);
}

  return (
    <>
     <button onClick={Incr}>Counter change </button>
     <h2>Counter = {count}</h2>
     <br/>
     <button onClick={SetTt}>Total update </button>
     <h2>INC Total = {total}</h2>
     <br/>
     
    </>
  )
}

export default App
