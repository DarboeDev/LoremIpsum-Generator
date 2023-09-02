import { useState } from 'react'
import './App.css'
import data from './data'

function App() {
const [text, setText] = useState([])
const [count, setCount] = useState(0)

 const handleSubmit = (e) =>{
  e.preventDefault();
  let amount = parseInt(count)
  if (count <= 0) {
    amount = 1;
  }
  if (count > 8) {
    amount = 8;
  }
  setText(data.splice(0, amount))
 }
  return (
    <div className="container">
      <h1>Tired of lorem ipsum ?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
        <button type="submit">Generate</button>
      </form>
      {
        text.map((text, index) =>{
          return(
            <p key={index}>
              {text}
            </p>
         )
        })
      }
    </div>
  )
}

export default App
