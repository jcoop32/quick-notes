import { useState, useEffect } from 'react';
import './NewNoteForm.css';
import * as notesService from '../../utilities/notes-service';
import NoteItem from '../NoteItem/NoteItem';
import * as notesApi from '../../utilities/notes-api';
export default function NewNoteForm({ user }) {
  const [note, setNewNote] = useState({
    text: '',
    user: user._id,
    error: '',
  });
  const [notes, setNotes] = useState([]);

  // update note list every render
  useEffect(
    function () {
      async function getNotesA() {
        const items = await notesApi.getNotes();
        setNotes(items);
      }
      getNotesA();
    },
    [note],
  );

  function handleChange(evt) {
    evt.preventDefault();
    setNewNote({ ...note, [evt.target.name]: evt.target.value });
    console.log(note);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const { text, user } = note;
      const formData = { text, user };
      const newNote = await notesService.createNoteService(formData);
      console.log(newNote);
    } catch {
      setNewNote({ error: 'Error' });
    }
    setNewNote({ text: '', user: user._id, error: '' });
  }

  const allNotes = notes.map((m, idx) => <NoteItem note={m} key={idx} />);

  return (
    <div className="NewNoteForm">
      <h1>Add New Note</h1>
      <form className="row" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Note"
          name="text"
          value={note.text}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary mb-3">
          Add Note
        </button>
      </form>
      <h1>My Notes</h1>
      <br />
      <div className="row">{allNotes}</div>
    </div>
  );
}
