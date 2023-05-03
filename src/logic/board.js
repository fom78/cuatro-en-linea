import { DIMENSION_BOARD } from '../constants.js'

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

  for (let i = 0; i < DIMENSION_BOARD-1; i++) {
    console.log(initialDiagonalOne - i,endDiagonalOne-DIMENSION_BOARD*i)
    console.log(initialDiagonalOne + DIMENSION_BOARD * i,endDiagonalOne+i)
    
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
