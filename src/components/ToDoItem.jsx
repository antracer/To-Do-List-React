import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setClick] = useState(false);

  function handleClickLi() {
    setClick(true);
  }

  return (
    <li
      style={isClicked ? { textDecoration: "line-through" } : null}
      onClick={handleClickLi}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
