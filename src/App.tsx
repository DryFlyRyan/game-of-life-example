import { useEffect, useReducer } from 'react';
import { dispatchEvolveBoard } from './actions/creators';
import { StyledApp } from './app.styles';
import Board from './components/Board/Board';
import { initialState, reducer } from './reducer';

let hadInitialRender = false;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (hadInitialRender) {
      setTimeout(() => {
        console.log('update state');
        dispatchEvolveBoard(dispatch)
      }, 400)
    } else {
      hadInitialRender = true;
    }
  }, [state.generation])

  return (
    <StyledApp className="App">
      <h1>Game 'o Life</h1>
      <Board reducerState={state} />
    </StyledApp>
  )
}

export default App
