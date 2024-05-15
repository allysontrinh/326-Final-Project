import express from 'express';
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

// Start the server
app.listen(port, () => {
    console.log(__dirname)
    console.log(`Server started at http://localhost:${port}`);
  });