
import "../index.css"

function GameBoard({onSelectSquare,board}) {



    //   const [gameBoard,setgameBoard]=useState(initialGameBoard)
//   function handleSelectSquare(rowInd,colInd){
//     setgameBoard((prevGameBoard)=>{
//         let gameB=[...prevGameBoard.map(innerArray=>[...innerArray])]    
//         gameB[rowInd][colInd]=activePlayerSymbol
//             return gameB
//     })
//     onSelectSquare();

//   }  
  
  return (
    <ol id="game-board">
        {
            board.map((row,rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,columnIndex)=>(
                            <li key={columnIndex}>
                                <button onClick={()=>{onSelectSquare(rowIndex,columnIndex)} } disabled={playerSymbol==="X"|| playerSymbol=="O"?true:false  } >{playerSymbol}  </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))

        }
    </ol>
  )
}

export default GameBoard