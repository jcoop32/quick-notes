import * as notesApi from './notes-api';

export async function createNoteService(noteData) {
  const note = await notesApi.createNote(noteData);
  // TODO: return user obj from token instead
  return note;
}
