import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));

// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });