export default function NoteItem({ note }) {
  console.log(`noteitem ${note}`);

  return (
    <div className="card mt-3">
      <div className="card-body col">
        <h6>{note.text}</h6>
        <p>created at: {note.createdAt}</p>
      </div>
    </div>
  );
}
