import React, { FC, useContext } from "react";
import { AppContext } from "../App";

const SingleLetter: FC<{ letterPos: number; attemptVal: number }> = ({
  letterPos,
  attemptVal,
}) => {
  const { board } = useContext(AppContext);
  const letter = board[letterPos][attemptVal];
  return <div className="letter">{letter}</div>;
};

export default SingleLetter;
