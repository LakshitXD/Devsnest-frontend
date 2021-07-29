import React from "react";
import Card from "./Card";

function Container() {
  return (
    <div>
      <div className="xd">
        <Card title="Pizza" content="contains 500 calories" />
        <Card title="Burger" content="contains 540 calories"/>
        <Card title="Hotdog" content="contains 530 calories"/>
        <Card title="Chowmein" content="contains 600 calories"/>
        <Card title="Nachos" content="contains 650 calories"/>
        <Card title="Noodles" content="contains 700 calories"/>
        <Card title="Manchuries" content="contains 520 calories"/>
        <Card title="French Fries" content="contains 330 calories"/>
      </div>
    </div>
  );
}

export default Container;
