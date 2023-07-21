import { useState } from 'react';
import Notes from '../../Components/Notes/Notes';
import NewNoteForm from '../../Components/NewNoteForm/NewNoteForm';
export default function NotesPage() {
  //   const [user, setUser] = useState(null)
  return (
    <>
      <NewNoteForm />
      <Notes />
    </>
  );
}
