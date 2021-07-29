import React from "react";

function Card({title, content}) {
  return (
    <div className="lmao">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Card;
