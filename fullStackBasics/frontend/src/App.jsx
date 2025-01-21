import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])
   useEffect(()=>{
      axios('/api/jokes')
      .then((response) =>{
        setJokes(response.data)
        // console.log(jokes);
      })
      .catch((error) =>{
        console.log(error)
      })
   },[])
  return (
    <>
     <h1>Full Stack</h1>
     <p>Jokes : {jokes.length}</p>
     {
      jokes.map((joke,index) =>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h4>{joke.punchline}</h4>
        </div>
      ))
     }
    </>
  )
}

export default App
