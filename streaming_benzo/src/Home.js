import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [roomID,SetroomID] = useState();
    const navigate = useNavigate();
    const handleJoin = ()=>{
        navigate(`/room/${roomID}`)
    }
  return (
    <div>
      
      <input type='text' placeholder='Enter roomID' value={roomID} onChange={e=>SetroomID(e.target.value)}/> 
      <button onClick={handleJoin}>JOIN</button>
    
    </div>
  )
}

export default Home
