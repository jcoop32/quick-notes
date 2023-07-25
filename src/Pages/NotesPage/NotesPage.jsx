import NewNoteForm from '../../Components/NewNoteForm/NewNoteForm';
export default function NotesPage({ user }) {
  return (
    <div className="container">
      <NewNoteForm user={user} />
    </div>
  );
}
