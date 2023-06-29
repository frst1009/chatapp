import React from 'react'
import SidePart from '../components/SidePart'
import Message from '../components/Message'
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const userName = location.state ? location.state.userName : 'Guest';
  return (
    <div style={{display: 'flex', justifyContent: "space-evenly"}}>
        <div><Message userName={userName}/></div>
      <div><SidePart/></div>
    </div>
  )
}

export default Home


