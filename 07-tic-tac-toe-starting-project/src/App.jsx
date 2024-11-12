import GameBoard from "./Components/GameBoard"
import Log from "./Components/Log"
import Player from "./Components/Player"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winningCombinations"
import GameOver from "./Components/GameOver"
const initialGameBoard=
[[null,null,null],
[null,null,null],
[null,null,null]]


function deriveActivePlayer(gameTurns){
  let currentPlayer="X"
  if(gameTurns.length > 0 && gameTurns[0].player=="X"){
    currentPlayer="O"
  }else currentPlayer="X"

  return currentPlayer;
}


function App() {
  // const [activePlayer,setActivePlayer]=useState('X')
  const[players,setPlayers] =useState({"X":"Player1","O":"Player2"})
  const [gameTurns,setGameTurns]=useState([]);

const activePlayer = deriveActivePlayer(gameTurns)


let gameBoard= [...initialGameBoard.map(array=>[...array])]
for(const turn of gameTurns){
    
    const {square,player}=turn;
    
    const {row,col}=square
    gameBoard[row][col]=player;
}

let winner = null
for (const combination of WINNING_COMBINATIONS){
  const firstSquareSymbol=gameBoard[combination[0].row][combination[0].col]
  const secondSquareSymbol=gameBoard[combination[1].row][combination[1].col]
  const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].col]
  if( firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol ){
    winner = firstSquareSymbol
  }
}
const hasDraw = gameTurns.length === 9 && !winner
function handleSelectSquare(rowIndex,ColumnIndex){

    // setActivePlayer((currentPlayer)=>{
    //   if(currentPlayer==="X") return "O"
    //   else return "X"
    // })
    
   


    setGameTurns(prevTurns =>{
      const currentPlayer=deriveActivePlayer(prevTurns)
      const updatedTurns=[{square:{row:rowIndex,col:ColumnIndex},player:currentPlayer}, ...prevTurns]
      
      return updatedTurns;
    })

  }

function handleRematch(){
  setGameTurns([])

}
function handlePlayerNameChange(symbol,newName){
  setPlayers(prevPlayers=>{
    return {...prevPlayers,
    [symbol]:newName
    }
  })
}


  return (
 
  <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
       <Player initialName="Player 1" symbol='X' isActive={activePlayer==='X'}/>
       <Player initialName="Player 2" symbol='O' isActive={activePlayer==='O'} />
      </ol>
      {(winner || hasDraw) && <GameOver reset={handleRematch} winner={winner}/>}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
    </div>
    <Log turns={gameTurns}/>
  </main>
  )
}

export default App
