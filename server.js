const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// always require  and configure near the top
require('dotenv').config();
// connect to db
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// middleware to check ad verify jwt and assign the
// user object to req.user
app.use(require('./config/checkTokenConfig'));

const port = process.env.PORT || 3001;

// put API routes here, before 'catch all' route
app.use('/api/users', require('./routes/api/usersRoutes'));

// the following 'catch all' route (note the *) is necessary to return
// the index.html on all non-AJAX/API requests
// /* - matches every path
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
