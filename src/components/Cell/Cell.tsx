import { StyledCell } from "./Cell.styles";

export interface Cell {
  alive: number
  posX: number
  posY: number
}

export default function Cell(
  { alive, posX, posY }:
  { alive: number, posX: number, posY: number }) {
  return (
    <StyledCell
      alive={alive}
      posX={posX}
      posY={posY}
    />
  )
}