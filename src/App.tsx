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
}

export const AppContext = createContext<AppContext>({} as AppContext);

const App: FC = () => {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Słówko</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
};

export default App;
