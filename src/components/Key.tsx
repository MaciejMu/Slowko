import React, { FC, useContext } from "react";
import { AppContext } from "../App";
import { KeyProps } from "../types/KeyInterface";

const Key: FC<KeyProps> = ({ keyVal, funcKey, disabled }) => {
  const { onEnter, onDelete, onSelectedLetter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "⮐") {
      onEnter();
    } else if (keyVal === "DEL") {
      onDelete();
    } else {
      onSelectedLetter(keyVal);
    }
  };

  return (
    <div
      className="key"
      id={funcKey ? "funcKey" : disabled ? "disabled" : undefined}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
};

export default Key;
