import { GameBoard, ReducerState } from '../../reducer';
import Cell from '../Cell/Cell';
import { StyledRow } from '../Row/Row.styles';
import { StyledBoard } from './Board.styles';

function buildBoard({ board } : { board: GameBoard}) {
  return board.map((row, y) => {
    const cells = row.map((cellValue, x) => {
      return <Cell key={`cell-${x}-${y}`} alive={cellValue} posX={x} posY={y} />
    })

    return (
      <StyledRow key={`row-${y}`}>
        {cells}
      </StyledRow>
    )
  })
}

export default function Board({ reducerState }: { reducerState: ReducerState }) {
  return (
    <StyledBoard>
      {buildBoard(reducerState)}
    </StyledBoard>
  );
}