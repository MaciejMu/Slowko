import { createContext, FC, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./Words";

interface AppContext {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
}

interface AppContext {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  currAttempt: { attempt: number; letterPos: number };
  setCurrAttempt: React.Dispatch<
    React.SetStateAction<{ attempt: number; letterPos: number }>
  >;
  onEnter: () => void;
  onDelete: () => void;
  onSelectedLetter: (keyVal: string) => void;
  correctWord: string;
}

export const AppContext = createContext<AppContext>({} as AppContext);

const App: FC = () => {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  const correctWord = "BAGNO";

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onSelectedLetter = (keyVal: string) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  return (
    <div className="App">
      <nav>
        <h1>Słówko</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onEnter,
          onDelete,
          onSelectedLetter,
          correctWord,
        }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default App;
