import express from 'express';
import path from 'path';
import browserSync from 'browser-sync';
import session from 'express-session';

const PORT = 8000;
const app = express();
const bs = browserSync.create();

// Session middleware
app.use(session({
  secret: 'your-random-secret-key',
  store: new session.MemoryStore(),
  resave: false,
  saveUninitialized: true
}));

// Serve static files from the "public" directory
app.use(express.static(path.join(process.cwd(), 'public')));

// Set Pug as the view engine and specify the views directory
app.set('view engine', 'pug');
app.set('views', path.join(process.cwd(), 'views'));

// Define a route to render a Pug template
app.get('/', (req, res) => {
    res.render('index');
});
  

import url from 'url';

app.get('/bookings', (req, res) => {
  const query = url.parse(req.url, true).query;
  res.render('bookings', { query });
});

app.post('/bookings', (req, res) => {
    res.redirect('/bookings?success=true');
});

app.get('/coming', (req, res) => {
    res.render('coming')
})

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server successfully running on port ${PORT}`);
});

// Start BrowserSync and proxy the Express server
bs.init({
  proxy: `http://localhost:${PORT}`,
  files: [
    path.join(process.cwd(), 'public', '**/*.*'),
    path.join(process.cwd(), 'views', '**/*.pug')
  ],
  notify: false,
  open: false
});