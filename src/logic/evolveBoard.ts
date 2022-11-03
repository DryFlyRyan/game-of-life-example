import { GameBoard } from "../reducer";

function getliveNeighbors(currentBoard: GameBoard, posX: number, posY: number) {
  let liveNeighbors = 0;
  for (let y = posY - 1; y <= posY + 1; y++) {
    for (let x = posX - 1; x <= posX + 1; x++) {
      if (
        y >= 0
        && x >= 0
        && y < currentBoard.length
        && x < currentBoard[y].length
        && !(x === posX && y === posY)
      ) {
        liveNeighbors += currentBoard[y][x];
      }
    }
  }

  return liveNeighbors;
}

// 1. Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure[2]).
// 2. Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
// 3. Any live cell with two or three live neighbours lives, unchanged, to the next generation.
// 4. Any dead cell with exactly three live neighbours will come to life.

function findNextCellValue(currentBoard: GameBoard, cellValue: number, posX: number, posY: number) {
  const liveNeighbors = getliveNeighbors(currentBoard, posX, posY);

  if (!cellValue) {
    return liveNeighbors === 3 ? 1 : 0;
  } 

  return (liveNeighbors === 2 || liveNeighbors === 3) ? 1 : 0;
}

export function evolveBoard(currentBoard: GameBoard) {
  return currentBoard.map((row, y) => row.map((cell, x) => findNextCellValue(currentBoard, cell, x, y)))
}