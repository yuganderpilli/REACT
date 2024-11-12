import React, { useState } from 'react'

function Player({initialName,symbol,isActive}) {
    const [isEditing,setIsEditing]=useState(false)
    function handleClick(){
        setIsEditing((e)=>!e)
    }
    function handleChange(e){
        setPlayerName(e.target.value)
    }
    const [playerName,setPlayerName]=useState(initialName)
    let player = <span className="player-name" >{playerName}</span>
    if(isEditing)
{
    player=<input type="text" value={playerName} onChange={handleChange} required />
}
    return (
    <li className={isActive?'active':undefined}>
          <span className="player">
          {player}
          <span className="player-symbol">{symbol}</span>
          </span>
         <button
            onClick={handleClick}
         >{isEditing?"Save":"Edit"}</button>
        </li>
  )
}

export default Player