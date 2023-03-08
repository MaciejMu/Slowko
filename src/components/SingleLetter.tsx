import React, { FC, useContext } from "react";
import { AppContext } from "../App";

const SingleLetter: FC<{ attemptVal: number; letterPos: number }> = ({
  attemptVal,
  letterPos,
}) => {
  const { board } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  return <div className="letter">{letter}</div>;
};

export default SingleLetter;
