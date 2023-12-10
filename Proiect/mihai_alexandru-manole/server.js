import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from './db.js';
import Candidat from './candidati.js';
import multer from 'multer';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

// Configurați rutele pentru utilizatori
app.get('/users', (req, res) => {
    // Logica pentru a prelua utilizatori
});

app.post('/users', (req, res) => {
    // Logica pentru a crea un utilizator
});

app.put('/users/:id', (req, res) => {
    // Logica pentru a actualiza un utilizator
});

app.delete('/users/:id', (req, res) => {
    // Logica pentru a șterge un utilizator
});

// Sincronizați baza de date și porniți serverul
sequelize.sync()
    .then(() => {
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
    })
    .catch(err => console.error('Eroare la sincronizarea cu baza de date:', err));
