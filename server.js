// Imports
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
//const methodOverride = require('method-override');
//const bodyParser = require('body-parser');


// construct an express js app
const app = express();


// Routers
const indexRouter = require('./routes/index');


// Settings
app.set('view engine', 'ejs'); // use ejs rendering
app.set('views', __dirname + '/views'); // set the views directory path (for routes)
app.set('layout', 'layouts/layout'); // set layouts directory
app.use(expressLayouts);
app.use(express.static('public')); // create a static files folder


// Database connection
/* DB for later...
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose!'))
*/


// Routes
app.use('/', indexRouter); // homepage router
/*
app.use('/events', eventsRouter)
app.use('/members', membersRouter)
app.use('/projects', projectsRouter)
app.use('/resources', resourcesRouter)
app.use('/admin', adminRouter)
*/

// If page does not exist:
app.get('*', (req, res) => {
    res.render('404');
});


// Listen for requests
app.listen(process.env.PORT || 5000);
