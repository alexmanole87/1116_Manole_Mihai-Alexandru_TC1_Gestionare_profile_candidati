import express from 'express';
import bodyParser from 'body-parser'; // Import pentru analiza corpului cererii
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from './db.js';
import Candidat from './candidati.js';
import Aplicatie from './aplicatie.js'; //
import multer from 'multer';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json()); // Utilizați bodyParser pentru a analiza JSON

// Rute pentru Candidat
app.get('/candidati', (req, res) => {
    // Logica pentru a prelua toți candidații
});

app.post('/candidati', (req, res) => {
    // Logica pentru a adăuga un nou candidat
});

// Rute pentru Aplicatie
app.get('/aplicatii', (req, res) => {
    // Logica pentru a prelua toate aplicațiile
});

app.post('/aplicatii', (req, res) => {
    // Logica pentru a adăuga o nouă aplicație
});

// Configurația pentru multer (dacă este necesară gestionarea încărcării fișierelor)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

// Sincronizați baza de date și porniți serverul
sequelize.sync()
    .then(() => {
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
    })
    .catch(err => console.error('Eroare la sincronizarea cu baza de date:', err));
