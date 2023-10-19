import { useState } from 'react'
import { ReactComponent as Logo } from './logo.svg'
import './app.css'

export function App () {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className= "text-3xl font-bold underline bg-amber-700">
        Hello world!
      </h1>    
  </div>
  )
}
