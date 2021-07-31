import React from "react";

const arr = [];
for (let i = 0; i < 64; i++) {
  arr.push(i);
}
function lmao(i) {
  if ((i + Math.floor(i / 8)) % 2 === 0) {
    return (
      <div className="white cell">
        {console.log((i + Math.floor(i / 8)) % 2 === 0)}
      </div>
    );
  } else {
    return (
      <div className="black cell">
        {console.log((i + Math.floor(i / 8)) % 2 === 0)}
      </div>
    );
  }
}
function Cell() {
  return arr.map(lmao);
}

export default Cell;
