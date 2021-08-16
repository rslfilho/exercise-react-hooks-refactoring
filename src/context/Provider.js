import React, { useState } from 'react'
import MyContext from './MyContext'

const Provider = (props) => {
  const [state, setState] = useState({
    activePlayer: 1,
    gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  })

  const resetGame = () => {
    setState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
  }

  const toggleActivePlayer = () => {
    const { activePlayer } = state;
    if (activePlayer === 1) return 2;
    return 1;
  }

  const updateState = (cellClicked) => {
    const newState = [...state.gameBoard];
    let newActivePlayer = state.activePlayer;

    if (state.gameBoard[cellClicked] === 0) {
      newState[cellClicked] = state.activePlayer;
      newActivePlayer = toggleActivePlayer();
    } else newState[cellClicked] = state.gameBoard[cellClicked];

    setState({
      ...state,
      activePlayer: newActivePlayer,
      gameBoard: newState,
    })
  }

  const context = {
    state,
    resetGame,
    updateState,
  }

  const { children } = props;

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  )
}

export default Provider
