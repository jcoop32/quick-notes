import { useState } from 'react';
import Notes from '../../Components/Notes/Notes';
import NewNoteForm from '../../Components/NewNoteForm/NewNoteForm';
export default function NotesPage({ user }) {
  //   const [user, setUser] = useState(null)
  return (
    <div className="container">
      <NewNoteForm user={user} />
      <Notes />
    </div>
  );
}
