const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notesController');
// makes sure user is logged in
// const checkLoggedIn = require('../../config/checkLoggedIn');

// All paths start with '/api/users'

// POST /api/notes
router.get('/', notesCtrl.index);

router.post('/create', notesCtrl.create);

module.exports = router;
