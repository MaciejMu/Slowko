import React, { useState } from "react";
import { boardDefault } from "../Words";
import SingleLetter from "./SingleLetter";

function Board() {
  return (
    <div className="board">
      <div className="board__row">
        <SingleLetter letterPos={0} attemptVal={0} />
        <SingleLetter letterPos={1} attemptVal={0} />
        <SingleLetter letterPos={2} attemptVal={0} />
        <SingleLetter letterPos={3} attemptVal={0} />
        <SingleLetter letterPos={4} attemptVal={0} />
      </div>
      <div className="board__row">
        <SingleLetter letterPos={0} attemptVal={1} />
        <SingleLetter letterPos={1} attemptVal={1} />
        <SingleLetter letterPos={2} attemptVal={1} />
        <SingleLetter letterPos={3} attemptVal={1} />
        <SingleLetter letterPos={4} attemptVal={1} />
      </div>
      <div className="board__row">
        <SingleLetter letterPos={0} attemptVal={2} />
        <SingleLetter letterPos={1} attemptVal={2} />
        <SingleLetter letterPos={2} attemptVal={2} />
        <SingleLetter letterPos={3} attemptVal={2} />
        <SingleLetter letterPos={4} attemptVal={2} />
      </div>
      <div className="board__row">
        <SingleLetter letterPos={0} attemptVal={3} />
        <SingleLetter letterPos={1} attemptVal={3} />
        <SingleLetter letterPos={2} attemptVal={3} />
        <SingleLetter letterPos={3} attemptVal={3} />
        <SingleLetter letterPos={4} attemptVal={3} />
      </div>
      <div className="board__row">
        <SingleLetter letterPos={0} attemptVal={4} />
        <SingleLetter letterPos={1} attemptVal={4} />
        <SingleLetter letterPos={2} attemptVal={4} />
        <SingleLetter letterPos={3} attemptVal={4} />
        <SingleLetter letterPos={4} attemptVal={4} />
      </div>
      <div className="board__row">
        <SingleLetter letterPos={0} attemptVal={5} />
        <SingleLetter letterPos={1} attemptVal={5} />
        <SingleLetter letterPos={2} attemptVal={5} />
        <SingleLetter letterPos={3} attemptVal={5} />
        <SingleLetter letterPos={4} attemptVal={5} />
      </div>
    </div>
  );
}

export default Board;
