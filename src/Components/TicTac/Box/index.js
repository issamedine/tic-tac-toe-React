import React, { useEffect, useState } from 'react';

const Box = ({
  handleResetFromChild,
  currentState,
  changeTurn,
  row,
  col,
  reset,
  isDisabled,
}) => {
  const [text, setText] = useState('');

  const toggleText = () => {
    if (text === '') {
      changeTurn(row, col);
      setText(currentState);
    }
  };

  useEffect(() => {
    console.log('reset', reset);
    if (reset) {
      setText('');
      handleResetFromChild();
    }
  }, [reset]);

  return (
    <div
      // className="box"
      onClick={toggleText}
      className={`box ${
        isDisabled && text === '' ? 'box-disabled' : 'box-enable'
      }`}
    >
      {text}
    </div>
  );
};

export default Box;
