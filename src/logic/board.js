import { DIMENSION_BOARD } from '../constants.js'

function checkDiagonal(board = [], turn, start, end,diagonalOne) {
  let enLinea = 0
  const paso = diagonalOne ? DIMENSION_BOARD-1 : DIMENSION_BOARD+1
  for (let i = start; i <= end ; i=i+paso) {
    if(board[i] == turn ) {
      enLinea = enLinea + 1
    } else {
      enLinea = 0
    }    
    if (enLinea === 4) return true
  }
  return false
}

export const checkWinnerFrom = (boardToCheck,position) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u O ganó

  // Chequeo linea horizontal
  const numberHorizontalLine = Math.trunc(position/DIMENSION_BOARD)
  let enLinea = 0
  for (let i = 0; i < DIMENSION_BOARD ; i++) {
    if(boardToCheck[numberHorizontalLine*DIMENSION_BOARD+i] == boardToCheck[position] ) {
      enLinea = enLinea + 1
    } else {
      enLinea = 0
    }    
    if (enLinea === 4) return boardToCheck[position]
  }

  // Chequeo linea vertical
  const numberVerticalLine = position%DIMENSION_BOARD
  enLinea = 0
  for (let i = 0; i < DIMENSION_BOARD ; i++) {
    if(boardToCheck[DIMENSION_BOARD*i+numberVerticalLine] == boardToCheck[position] ) {
      enLinea = enLinea + 1
    } else {
      enLinea = 0
    }    
    if (enLinea === 4) return boardToCheck[position]
  }

  // Para las diagonales chequear los limites
  const initialDiagonalOne = DIMENSION_BOARD - 1
  const endDiagonalOne = DIMENSION_BOARD*DIMENSION_BOARD - initialDiagonalOne - 1

  // La otra diagonal
  const initialDiagonalTwo = 0
  const endDiagonalTwo = DIMENSION_BOARD*DIMENSION_BOARD  - 1
 
  if (checkDiagonal(boardToCheck,boardToCheck[position],initialDiagonalOne,endDiagonalOne,true)) return boardToCheck[position]
  if (checkDiagonal(boardToCheck,boardToCheck[position],initialDiagonalTwo,endDiagonalTwo,false)) return boardToCheck[position]
  for (let i = 1; i < DIMENSION_BOARD-1; i++) {
    if (checkDiagonal(boardToCheck,boardToCheck[position],initialDiagonalOne - i,endDiagonalOne-DIMENSION_BOARD*i,true)) return boardToCheck[position]
    if (checkDiagonal(boardToCheck,boardToCheck[position],initialDiagonalOne + DIMENSION_BOARD * i,endDiagonalOne+i,true)) return boardToCheck[position]  
    if (checkDiagonal(boardToCheck,boardToCheck[position],initialDiagonalTwo + i,endDiagonalTwo-DIMENSION_BOARD*i,false)) return boardToCheck[position]
    if (checkDiagonal(boardToCheck,boardToCheck[position],initialDiagonalTwo + DIMENSION_BOARD * i,endDiagonalTwo-i,false)) return boardToCheck[position]

  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay más espacios vacíos
  // en el tablero
  return newBoard.every((square) => square !== null)
}
