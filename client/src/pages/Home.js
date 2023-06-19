import React from 'react'
import SidePart from '../components/SidePart'
import Message from '../components/Message'

function Home() {

  return (
    <div style={{display: 'flex', justifyContent: "space-evenly"}}>
        <div><Message/></div>
      <div><SidePart/></div>
    </div>
  )
}

export default Home


