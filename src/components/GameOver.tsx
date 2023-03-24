import { FC, useContext } from "react";
import { AppContext } from "../App";

const GameOver: FC = () => {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "Wygrałeś!" : "Przegrałeś "}</h3>
      <h1>Correct word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3> Zgadłeś w {currAttempt.attempt} próbach</h3>
      )}
    </div>
  );
};

export default GameOver;
