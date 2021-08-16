import React, { useContext } from 'react';
import MyContext from './context/MyContext';
import GameBoard from './GameBoard';
import {
  victoryArchivedInColumn,
  victoryArchivedInDiagonals,
  victoryArchivedInLine
} from './helpers'

const TicTacToe = () => {
  const { state, resetGame, updateState } = useContext(MyContext)

  const victoryArchieved = () => {
    const { gameBoard } = state;

    return (
      victoryArchivedInLine(gameBoard)
      || victoryArchivedInColumn(gameBoard)
      || victoryArchivedInDiagonals(gameBoard)
    );
  }

  const renderButton = () => {
    return (
      <button
        type="button"
        onClick={resetGame}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
    );
  }

  const { gameBoard } = state;
  const win = victoryArchieved();

  if (!gameBoard.includes(0) && !win) {
    return (
      <>
        {renderButton()}
        <h1>Empate</h1>
      </>
    );
  }

  return (
    <>
      {renderButton()}
      {(!win)
        ? (
          <GameBoard
            gameState={gameBoard}
            updateGame={updateState}
          />
        )
        : <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>}
    </>
  );
}

export default TicTacToe;
