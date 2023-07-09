import React from 'react'
import { data } from '../App'
import { useContext } from 'react'
import '../components/styles/Welcome.css'
function Welcome() {
  const [details,] = useContext(data)
  return (
    <div>
      <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>
      </div>
      <div className='welcomebody'>
        Welcome {details.username}
      </div>
    </div>
  )
}

export default Welcome