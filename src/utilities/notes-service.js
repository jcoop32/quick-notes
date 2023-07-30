import * as notesApi from './notes-api';

export async function createNoteService(noteData) {
  const note = await notesApi.createNote(noteData);
  return note;
}
