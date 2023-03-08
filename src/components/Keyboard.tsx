import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../App";
import Key from "./Key";

const Keyboard = () => {
  const { onEnter, onDelete, onSelectedLetter } = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = (event: { key: string }) => {
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
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return <Key keyVal={key} key={key} />;
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key keyVal={key} key={key} />;
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} funcKey />
        {keys3.map((key) => {
          return <Key keyVal={key} key={key} />;
        })}
        <Key keyVal={"DELETE"} funcKey />
      </div>
    </div>
  );
};

export default Keyboard;
