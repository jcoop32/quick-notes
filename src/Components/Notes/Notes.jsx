import NoteItem from '../NoteItem/NoteItem';
export default function Notes() {
  return (
    <>
      <h1>My Notes</h1>
      <br />
      <div className="card row">
        <NoteItem />
      </div>
    </>
  );
}
