import { useState } from 'react';
import './NewNoteForm.css';
export default function NewNoteForm({ user }) {
  const [notes, setNewNotes] = useState({
    text: '',
    user: user._id,
  });

  function handleChange(evt) {
    evt.preventDefault();
    setNewNotes({ ...notes, text: evt.target.value });
    console.log(notes);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <div className="NewNoteForm">
      <h1>Add New Note</h1>
      <form className="row" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Note"
          name="text"
          value={notes.text}
          onChange={handleChange}
        />
        <button type="submit" class="btn btn-primary mb-3 ">
          Add Note
        </button>
      </form>
    </div>
  );
}
