import { Dispatch } from "react";
import { EVOLVE_BOARD } from "./constants";

export interface Action {
  type: string
}

export const dispatchEvolveBoard = (dispatch: Dispatch<Action>) => dispatch({ type: EVOLVE_BOARD })