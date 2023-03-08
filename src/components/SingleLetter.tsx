import React, { FC, useContext } from "react";
import { AppContext } from "../App";

const SingleLetter: FC<{ attemptVal: number; letterPos: number }> = ({
  attemptVal,
  letterPos,
}) => {
  const { board, correctWord, currAttempt } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal
      ? correct
        ? "correct"
        : almost
        ? "almost"
        : "wrong"
      : undefined;

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default SingleLetter;
