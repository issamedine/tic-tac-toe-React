import React, { useEffect, useState } from 'react';
import Box from './Box';
import useSound from 'use-sound';

import './TicTac.css';

import eatSuccess from '../../sounds/eat_success.wav';
import game_over from '../../sounds/error-producer.mp3';
import finallly from '../../sounds/mixkit-video-game-treasure-2066.wav';

let board = [[], [], []];

const TiTac = () => {
  const [onEatSuccess] = useSound(eatSuccess);
  const [onGameOver] = useSound(game_over);
  const [onWinner] = useSound(finallly);

  const [turn, setTurn] = useState('X');

  const changeTurn = (row, col) => {
    board[row][col] = turn;
    setTurn((o) => (o === 'X' ? 'O' : 'X'));

    board[0][0] &&
    board[0][1] &&
    board[0][2] &&
    board[1][0] &&
    board[1][1] &&
    board[1][2] &&
    board[2][0] &&
    board[2][1] &&
    board[2][2]
      ? onGameOver() && setStateGame('Game Over') && setTurn('X')
      : onEatSuccess();
  };

  console.log('turn', turn);

  const checkFirstRow =
    board[0].length > 0 &&
    board[0][0] === board[0][1] &&
    board[0][1] === board[0][2];

  const checkSecondRow =
    board[1].length > 0 &&
    board[1][0] === board[1][1] &&
    board[1][1] === board[1][2];

  const checkThirdRow =
    board[2].length > 0 &&
    board[2][0] === board[2][1] &&
    board[2][1] === board[2][2];

  const checkFirstColumn =
    board[0][0] !== undefined &&
    board[1][0] !== undefined &&
    board[2][0] !== undefined &&
    board[0][0] === board[1][0] &&
    board[1][0] === board[2][0];

  const checkSecondColumn =
    board[0][1] !== undefined &&
    board[1][1] !== undefined &&
    board[2][1] !== undefined &&
    board[0][1] === board[1][1] &&
    board[1][1] === board[2][1];

  const checkThirdColumn =
    board[0][2] !== undefined &&
    board[1][2] !== undefined &&
    board[2][2] !== undefined &&
    board[0][2] === board[1][2] &&
    board[1][2] === board[2][2];

  const checkDiagLeftToRight =
    board[0][0] !== undefined &&
    board[1][1] !== undefined &&
    board[2][2] !== undefined &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2];

  const checkDiagRightToLeft =
    board[0][2] !== undefined &&
    board[1][1] !== undefined &&
    board[2][0] !== undefined &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0];

  const [reset, setReset] = useState(false);
  const [stateGame, setStateGame] = useState('');

  const handleReset = () => {
    board = [[], [], []];

    setReset(true);
    setDisabled(false);
    setTurn('X');
  };

  useEffect(() => {
    // board[0][0] &&
    //   board[0][1] &&
    //   board[0][2] &&
    //   board[1][0] &&
    //   board[1][1] &&
    //   board[1][2] &&
    //   board[2][0] &&
    //   board[2][1] &&
    //   board[2][2] &&
    //   onGameOver() &&
    //   setStateGame('Game Over') &&
    //   setTurn('X');
  }, [turn]);

  // console.log('checkFirstRow', checkFirstRow);
  // console.log('checkSecondRow', checkSecondRow);
  // console.log('checkThirdRow', checkThirdRow);
  // console.log('checkFirstColumn', checkFirstColumn);
  // console.log('checkSecondColumn', checkSecondColumn);
  // console.log('checkThirdColumn', checkThirdColumn);
  // console.log('checkDiagLeftToRight', checkDiagLeftToRight);
  // console.log('checkDiagRightToLeft', checkDiagRightToLeft);

  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    if (
      checkFirstRow ||
      checkSecondRow ||
      checkThirdRow ||
      checkFirstColumn ||
      checkSecondColumn ||
      checkThirdColumn ||
      checkDiagLeftToRight ||
      checkDiagRightToLeft
    ) {
      setDisabled(true);
      onWinner();
    }
  }, [turn]);

  const handleResetFromChild = () => {
    setReset(false);
  };

  return (
    <div id="game">
      {(checkFirstRow ||
        checkSecondRow ||
        checkThirdRow ||
        checkFirstColumn ||
        checkSecondColumn ||
        checkThirdColumn ||
        checkDiagLeftToRight ||
        checkDiagRightToLeft) && (
        <p>Félicitations {turn === 'X' ? 'Player 2' : 'Player 1'}</p>
      )}
      {stateGame}
      <button onClick={handleReset} className="btn-restart">
        Restart
      </button>
      <div className="row">
        <Box
          row={0}
          col={0}
          currentState={turn}
          changeTurn={changeTurn}
          reset={reset}
          isDisabled={isDisabled}
          handleResetFromChild={handleResetFromChild}
        />
        <Box
          row={0}
          col={1}
          currentState={turn}
          changeTurn={changeTurn}
          reset={reset}
          isDisabled={isDisabled}
          handleResetFromChild={handleResetFromChild}
        />
        <Box
          row={0}
          col={2}
          currentState={turn}
          changeTurn={changeTurn}
          reset={reset}
          isDisabled={isDisabled}
          handleResetFromChild={handleResetFromChild}
        />
      </div>
      <div className="row">
        <Box
          row={1}
          col={0}
          currentState={turn}
          changeTurn={changeTurn}
          reset={reset}
          isDisabled={isDisabled}
          handleResetFromChild={handleResetFromChild}
        />
        <Box
          row={1}
          col={1}
          currentState={turn}
          changeTurn={changeTurn}
          reset={reset}
          isDisabled={isDisabled}
          handleResetFromChild={handleResetFromChild}
        />
        <Box
          row={1}
          col={2}
          currentState={turn}
          changeTurn={changeTurn}
          reset={reset}
          isDisabled={isDisabled}
          handleResetFromChild={handleResetFromChild}
        />
      </div>
      <div className="row">
        <Box
          row={2}
          col={0}
          currentState={turn}
          changeTurn={changeTurn}
          reset={reset}
          isDisabled={isDisabled}
          handleResetFromChild={handleResetFromChild}
        />
        <Box
          row={2}
          col={1}
          currentState={turn}
          changeTurn={changeTurn}
          reset={reset}
          isDisabled={isDisabled}
          handleResetFromChild={handleResetFromChild}
        />
        <Box
          row={2}
          col={2}
          currentState={turn}
          changeTurn={changeTurn}
          reset={reset}
          isDisabled={isDisabled}
          handleResetFromChild={handleResetFromChild}
        />
      </div>
    </div>
  );
};

export default TiTac;
