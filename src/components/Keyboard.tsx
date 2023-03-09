import React, { FC, useCallback, useContext, useEffect } from "react";
import { AppContext } from "../App";
import Key from "./Key";

const Keyboard: FC = () => {
  const { onEnter, onDelete, onSelectedLetter, disabledLetters, currAttempt } =
    useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback(
    (event: { key: string }) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toUpperCase() === key) onSelectedLetter(key);
        });
        keys2.forEach((key) => {
          if (event.key.toUpperCase() === key) onSelectedLetter(key);
        });
        keys3.forEach((key) => {
          if (event.key.toUpperCase() === key) onSelectedLetter(key);
        });
      }
    },
    [currAttempt] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="keyboard__row">
        {keys1.map((key) => {
          return (
            <Key
              keyVal={key}
              key={key}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="keyboard__row">
        {keys2.map((key) => {
          return (
            <Key
              keyVal={key}
              key={key}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="keyboard__row">
        <Key keyVal={"⮐"} funcKey />
        {keys3.map((key) => {
          return (
            <Key
              keyVal={key}
              key={key}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
        <Key keyVal={"DEL"} funcKey />
      </div>
    </div>
  );
};

export default Keyboard;
