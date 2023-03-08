import React, { FC, useContext } from "react";
import { AppContext } from "../App";

interface Key {
  keyVal: string;
  funcKey?: boolean;
}

const Key: FC<Key> = ({ keyVal, funcKey }) => {
  const {
    board,
    setBoard,
    currAttempt,
    setCurrAttempt,
    onEnter,
    onDelete,
    onSelectedLetter,
  } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectedLetter(keyVal);
    }
  };

  return (
    <div className="key" id={funcKey ? "funcKey" : ""} onClick={selectLetter}>
      {keyVal}
    </div>
  );
};

export default Key;
