import React from "react";

function ToDoItem(props) {
  return (
    <div
    /*
      onClick={props.onChecked(props.id)}
      срабатывает мгновенно, не взирая на 
      событие клика, а стрелочная нет - она
      ждет, пока ее время наступит
    */
      onClick={() => {
        props.onChecked(props.id);
      }}
    
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;