'use client'

import  { useState, useEffect, useCallback } from 'react'
import Button from './Component/Button'
import { Card, CardContent } from "./Component/Card"

import { Heart } from 'lucide-react'
import RoundButton from './Component/RoundeButton'
import Toast from './Toas'

const SudokuGenerator = () => {
  const [sudoku, setSudoku] = useState(Array(9).fill(null).map(() => Array(9).fill('-')))
  const [solvedSudoku, setSolvedSudoku] = useState([])
  const [isSolved, setIsSolved] = useState(false)
  const [selectedCell, setSelectedCell] = useState(null)
  const [message, setMessage] = useState(null)
  const [difficulty, setDifficulty] = useState('medium')
  const [lives, setLives] = useState(3)
  const [gameOver, setGameOver] = useState(false)
  const [hints, setHints] = useState(3);  // 3 pistas disponibles inicialmente
  const [correctCells, setCorrectCells] = useState([]);
const [incorrectCells, setIncorrectCells] = useState([]);
const [noteMode, setNoteMode] = useState(false);
const [notes, setNotes] = useState(Array(9).fill(null).map(() => Array(9).fill(new Set())));
const [notesHistory, setNotesHistory] = useState([]);
const [showToast, setShowToast] = useState(false);









  const giveHint = () => {
    if (hints > 0 && !gameOver && !isSolved) {
      let emptyCells = [];
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (sudoku[i][j] === '-') {
            emptyCells.push([i, j]);
          }
        }
      }
  
      if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        const [row, col] = randomCell;
        const newSudoku = [...sudoku];
        newSudoku[row][col] = solvedSudoku[row][col];
        setSudoku(newSudoku);
        setHints(hints - 1);
      }
    }
  };
  

  const changeDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
    generateSudoku(newDifficulty);
  };

  const getDifficultyProbability = (diff) => {
    switch (diff) {
      case 'easy':
        return 0.7 // More filled cells
      case 'medium':
        return 0.5 // Default difficulty
      case 'hard':
        return 0.32 // Fewer filled cells
      default:
        return 0.5 // Default difficulty
    }
  }

  const generateSudoku = useCallback((diff = difficulty) => {
    const newSudoku = Array(9).fill(null).map(() => Array(9).fill('-'));
    const solution = Array(9).fill(null).map(() => Array(9).fill('-'));
  
    const fillCell = (row, col) => {
      const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
      for (let num of nums) {
        if (isValid(solution, row, col, num.toString())) {
          solution[row][col] = num.toString();
  
          if (row === 8 && col === 8) {
            return true; // Puzzle is complete
          } else if (col === 8) {
            if (fillCell(row + 1, 0)) return true;
          } else {
            if (fillCell(row, col + 1)) return true;
          }
  
          solution[row][col] = '-'; // Backtrack
        }
      }
  
      return false;
    };
  
    fillCell(0, 0);
    const probability = getDifficultyProbability(diff);
    // Copy solution to newSudoku and remove some numbers to create the puzzle
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (Math.random() > probability) {
          newSudoku[i][j] = '-';
        } else {
          newSudoku[i][j] = solution[i][j];
        }
      }
    }
  
    setSudoku(newSudoku);
    setSolvedSudoku(solution);
    setIsSolved(false);
    setSelectedCell(null);
    setMessage(null);
    setLives(3);
    setGameOver(false);
    setCorrectCells([]);
    setIncorrectCells([]);
    setNotes(Array(9).fill(null).map(() => Array(9).fill(new Set())));
    setNoteMode(false);
    setHints(3);

  }, [difficulty]);
  

  useEffect(() => {
    generateSudoku()
  }, [generateSudoku])

  const isValid = (board, row, col, num) => {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num) return false
    }

    // Check column
    for (let x = 0; x < 9; x++) {
      if (board[x][col] === num) return false
    }

    // Check 3x3 box
    let boxRow = Math.floor(row / 3) * 3
    let boxCol = Math.floor(col / 3) * 3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRow + i][boxCol + j] === num) return false
      }
    }

    return true
  }

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const solveSudoku = () => {
    setSudoku(solvedSudoku);
    setIsSolved(true);
    setSelectedCell(null);
    
     // Toast
    setCorrectCells([]);
    setIncorrectCells([]);
    setNotes(Array(9).fill(null).map(() => Array(9).fill(new Set())));
    setNoteMode(false);

  };
  

  const handleCellClick = (row, col) => {
    if (sudoku[row][col] === '-' && !gameOver) {
      setSelectedCell([row, col])
    }
  }

  const handleNumberInput = (num) => {
    if (selectedCell && !gameOver) {
      const [row, col] = selectedCell;
  
      if (noteMode) {
        const newNotes = notes.map((rowNotes, i) =>
          rowNotes.map((cellNotes, j) =>
            i === row && j === col
              ? cellNotes.has(num)
                ? new Set([...cellNotes].filter((n) => n !== num))
                : new Set(cellNotes).add(num)
              : cellNotes
          )
          
        );

        setNotesHistory([...notesHistory, { row, col, prevNotes: new Set(notes[row][col]) }]); // Guardar el historial de notas
      setNotes(newNotes);
        setNotes(newNotes);
      } else {
        if (solvedSudoku[row][col] === num) {
          const newSudoku = [...sudoku];
          newSudoku[row][col] = num;
          setSudoku(newSudoku);
          setSelectedCell(null);
          setCorrectCells([...correctCells, `${row}-${col}`]);
          checkCompletion();
        } else {
          setLives((prevLives) => {
            const newLives = prevLives - 1;
            if (newLives === 0) {
              setGameOver(true);
              setMessage({ type: 'error', text: '¡Game Over! Has agotado todas tus vidas.' });
            } else {
              setMessage({ type: 'error', text: `${num} no es el número correcto. Te quedan ${newLives} vidas.` });
              setIncorrectCells([...incorrectCells, `${row}-${col}`]);
            }
            return newLives;
          });
        }
      }
    }
  };
  const undoNote = () => {
    if (notesHistory.length > 0) {
      const lastAction = notesHistory.pop();
      const { row, col, prevNotes } = lastAction;
      const newNotes = [...notes];
      newNotes[row][col] = prevNotes;
      setNotes(newNotes);
      setNotesHistory([...notesHistory]); // Actualizar el historial
    }
  };
  const clearNotes = () => {
    if (selectedCell) {
      const [row, col] = selectedCell;
      if (notes[row][col].size > 0) {
        const newNotes = notes.map((rowNotes, i) =>
          rowNotes.map((cellNotes, j) => (i === row && j === col ? new Set() : cellNotes))
        );
        setNotes(newNotes);
      }
    }
  };
    
  
  

  const checkCompletion = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudoku[i][j] === '-') {
          return false
        }
      }
    }
    setIsSolved(true)
    setShowToast(true);// toast
    setMessage({ type: 'success', text: '¡Felicidades! Has completado el Sudoku correctamente.' })
    return true
  }

  return (
    <div className="flex justify-center  bg-white  space-x-5 p-4 w-3/4 m-auto h-auto">
      <Card className="bg-white">
        <CardContent>
          {message && (
            <div className={`mb-4 p-2 rounded ${message.type === 'error' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
              {message.text}
            </div>
          )}
          <div className="flex justify-between items-center mb-4 space-x-3">
            
            <div className="flex">
              {[...Array(3)].map((_, index) => (
                <Heart
                  key={index}
                  className={`w-6 h-6 ${index < lives ? 'text-red-500 fill-red-500' : 'text-gray-300'}`}
                />
              ))}
             
            </div>
            
          </div>
          <div className="grid grid-cols-9 bg-ColorP p-1 shadow-lg gap-0.5">
  {sudoku.map((row, i) =>
    row.map((cell, j) => (
      <div
      key={`${i}-${j}`}
      className={`w-10 h-10 flex items-center justify-center bg-white text-xl font-semibold cursor-pointer
    ${j % 3 === 2 && j !== 8 ? 'border-r-4 border-ColorP' : ''}
    ${i % 3 === 2 && i !== 8 ? 'border-b-4 border-ColorP' : ''}
    ${isSolved && sudoku[i][j] !== solvedSudoku[i][j] ? 'text-blue-500' : ''}
    ${selectedCell && selectedCell[0] === i && selectedCell[1] === j ? 'bg-yellow-100' : ''}
    ${gameOver ? 'cursor-not-allowed' : ''}
    ${correctCells.includes(`${i}-${j}`) ? 'text-green-500' : ''}
    ${incorrectCells.includes(`${i}-${j}`) ? 'text-red-500' : ''}
    `}
      onClick={() => handleCellClick(i, j)}
      >
        {cell !== '-' ? cell : ''}
        <div className="text-xs">
      {[...notes[i][j]].sort().join(', ')}
    </div>
      </div>
    ))
  )}
</div>

        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardContent>
          <h1 className="text-center text-6xl mb-6 font-Pangolin">Sudoku</h1>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              
              <div className="flex space-x-2 font-Roboto justify-center">
              <span className="font-bold font-Roboto py-1">Dificultad:</span>
                <Button onClick={() => changeDifficulty('easy')}>Fácil</Button>
                <Button onClick={() => changeDifficulty('medium')}>Normal</Button>
                <Button onClick={() => changeDifficulty('hard')}>Difícil</Button>
              </div>
            </div>
           
          </div>
          {selectedCell && !isSolved && !gameOver && (
            <div className="grid grid-cols-3 gap-2 mt-4">
              
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <Button
                  key={num}
                  onClick={() => handleNumberInput(num.toString())}
                >
                  {num}
                </Button>
              ))}
            </div>
          )}
        

<div className='flex gap-6 mt-4 font-Roboto'>
<div>


<RoundButton onClick={undoNote} disabled={notesHistory.length === 0}>
    
    <img src="Deshacer.svg" alt="Deshacer" />
   </RoundButton>
   <p className='flex justify-center'>Deshacer</p>
</div>
   <div>
   <RoundButton onClick={clearNotes} >
                
                <img src="Borrar.svg"/>
               </RoundButton>
               <p className='flex justify-center'>Borrar</p>
   </div>
               
               <div className='relative'> 


               <RoundButton
    onClick={giveHint}
    
    disabled={hints <= 0}
    
  >
    <p className='absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white text-sm flex items-center justify-center rounded-full'> {hints}</p>
    <img src="Pista.png" alt="" />
  </RoundButton>
  <p className='flex justify-center'>Pista</p>
               </div>
       

  <div>

  <RoundButton
  onClick={() => setNoteMode(!noteMode)}
  
>
<img src="Lapiz.svg" alt="" />
 
</RoundButton>
<p className='flex justify-center'>{noteMode ? 'Numeros' : 'Notas'}</p>
  </div>
 
               
</div>
<div className="flex flex-col   items-center gap-3 mt-28 ">
              <button onClick={() => generateSudoku()}        className='border border-RosadoC  py-1 rounded-full text-RosadoC hover:bg-RosadoC hover:text-white w-28'>
                Nuevo juego
              </button>
              <button onClick={solveSudoku} className='  py-1 rounded-full text-white hover:bg-white bg-RosadoC hover:text-RosadoC hover:border hover:border-RosadoC w-28'>
                Resolver
              </button>
              
  
            </div>
        </CardContent>
      </Card>
      {showToast && (
  <Toast newGame={ <button onClick={() => generateSudoku()}        className='py-1 rounded-full text-white hover:bg-white bg-RosadoC hover:text-RosadoC hover:border hover:border-RosadoC w-28'>
  Nuevo juego
</button>} onClose={() => setShowToast(false)} />
)}

     
    </div>
  )
}

export default SudokuGenerator



