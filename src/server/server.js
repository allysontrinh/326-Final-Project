import express from 'express';
import PouchDB from 'pouchdb';
import path from 'path';
import session from 'express-session'
import passport from './auth.js'; // This will import the configured passport instance
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/room.html',
    failureRedirect: '/auth/google/failure'
  })
);
  
app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

app.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

const db = new PouchDB('reminders');

app.post('/saveReminder', (req, res) => {
  const { datetime, text } = req.body;

    db.post({datetime, text})
    .then(() => {
      res.status(200).send('Reminder saved successfully');
    })
    .catch(error => {
      res.status(500).send('Error saving reminder: ' + error.message);
    });
});

app.get('/getReminders', (req, res) => {
  db.allDocs({include_docs: true})
    .then(result=> {
      const reminders = result.rows.map(row => row.doc);
      res.json(reminders);
    })
    .catch(error => {
      res.status(500).send('Error fetching reminders: ' + error.message);
    });
});

app.put('/updateReminder/:id', (req, res) => {
  const { id } = req.params;
  const { datetime, text } = req.body;

  db.get(id)
    .then(doc => {
      doc.datetime = datetime;
      doc.text = text;
      return db.put(doc);
    })
    .then(() => res.status(200).send('Reminder updated successfully'))
    .catch(error => res.status(500).send('Error updating reminder: ' + error.message));
});

app.delete('/deleteReminder/:id', (req, res) => {
  const { id } = req.params;

  db.get(id)
    .then(doc => db.remove(doc))
    .then(() => res.status(200).send('Reminder deleted successfully'))
    .catch(error => res.status(500).send('Error deleting reminder: ' + error.message));
});

// Start the server
app.listen(port, () => {
    console.log(__dirname)
    console.log(`Server started at http://localhost:${port}`);
  });

