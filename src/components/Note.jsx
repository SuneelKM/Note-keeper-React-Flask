import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";

function Note(props) {

  const [strike, setStrike] = useState(props.strike);

  function handleClick() {
    props.onDelete(props.id);
  }

  function textStrike() {
    fetch("/strike/" + props.id, {
      method: "PUT"
    }).then(() => setStrike(!strike))
  }

  return (
    <div className="note">
      <h1
        onClick={textStrike}
        style={{ textDecoration: strike ? "line-through" : null }}
      >
        {props.title}
      </h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default Note;
