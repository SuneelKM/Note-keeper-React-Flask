import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [visible, setVisible] = useState(false);
  function clicked() {
    setVisible(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={{ display: visible ? "" : "none" }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />

        <textarea
          name="content"
          onClick={clicked}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={visible ? "3" : "1"}
        />

        <Zoom in={visible}>
          <Fab onClick={submitNote}>
            <AddIcon />{" "}
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
