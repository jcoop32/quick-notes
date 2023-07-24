import { useState, useEffect } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import * as userService from '../../utilities/notes-service';

export default function Notes({ user }) {
  const [notes, setNotes] = useState([]);

  /*---works stable, doesnt update list live---*/
  useEffect(() => {
    const getNotes = async () => {
      const response = await fetch('/api/notes/');
      const json = await response.json();
      if (response.ok) {
        setNotes(json);
      }
    };

    getNotes();
  }, [notes]);

  /*---not stable, but works... updates data in real time ---*/
  // async function getNotes() {
  //   try {
  //     const notes = await userService.getNotesService(user);
  //     setNotes(notes);
  //   } catch (error) {
  //     setNotes({ error: error });
  //   }
  // }

  // getNotes();

  const note = notes.map((m, idx) => <NoteItem note={m} key={idx} />);
  // const newSetNotes = new Set(notes);
  console.log(`notespage ${note}`);

  return (
    <>
      <h1>My Notes</h1>
      <br />
      <div className="row">{note}</div>
    </>
  );
}
