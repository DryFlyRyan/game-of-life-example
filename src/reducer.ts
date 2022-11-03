import { EVOLVE_BOARD } from './actions/constants';
import { Action } from './actions/creators';
import * as boards from './boards';

import { evolveBoard } from './logic/evolveBoard';

export type GameBoard = number[][];

export interface ReducerState {
  board: GameBoard
  generation: number
  limited: boolean
}

export const initialState = {
  board: boards.flipper,
  generation: 0,
  limited: true,
}

export function reducer(state: ReducerState = initialState, action: Action) {
  switch(action.type) {
    case EVOLVE_BOARD: {
      const nextBoard = evolveBoard(state.board);
      return {
        ...state,
        board: nextBoard,
        generation: state.generation++
      }
    }

    default: {
      console.error(`Unrecognized action type: ${action.type}`)
      return { ...state };
    }
  }

}