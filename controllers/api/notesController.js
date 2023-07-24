const Note = require('../../models/noteModel');

module.exports = {
  index,
  create,
};

async function create(req, res) {
  try {
    // add the user to the db
    const note = await Note.create({
      text: req.body.text,
      user: { user: req.body.user._id },
    });
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  const notes = await Note.find({});
  res.json(notes);
}
