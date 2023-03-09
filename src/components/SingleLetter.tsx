import React, { FC, useContext, useEffect } from "react";
import { AppContext } from "../App";
import { SingleLetterProps } from "../types/SingleLetterInterface";

const SingleLetter: FC<SingleLetterProps> = ({ attemptVal, letterPos }) => {
  const { board, correctWord, currAttempt, setDisabledLetters } =
    useContext(AppContext);
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

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prevDisabledLetters) => [
        ...prevDisabledLetters,
        letter,
      ]);
    }
  }, [currAttempt.attempt]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default SingleLetter;
