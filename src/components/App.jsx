import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    fetch("/all")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data.notes);
      });
  }, [change]);

  function addNote(newNote) {
    fetch("/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
      {
        title: newNote.title,
        content: newNote.content,
        strike: false
      })
    }).then(() => setChange(!change))
  }

  function deleteNote(id) {
    fetch("/delete/" + id, {
      method: "DELETE"
    }).then(() => setChange(!change))
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            strike={noteItem.strike}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
