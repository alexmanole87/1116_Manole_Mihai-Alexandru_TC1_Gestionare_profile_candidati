import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './db.js';
import Candidat from './candidati.js';
import Aplicatie from './aplicatie.js';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Configurarea bodyParser pentru a analiza cererile JSON
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servirea fișierelor statice din React build
app.use(express.static(path.join(__dirname, 'build')));

// Rute pentru Candidat
app.get('/candidati', async (req, res) => {
    try {
        const candidati = await Candidat.findAll();
        res.json(candidati);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/candidati', async (req, res) => {
    try {
        const candidat = await Candidat.create(req.body);
        res.status(201).json(candidat);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rute pentru Aplicatie
app.get('/aplicatii', async (req, res) => {
    try {
        const aplicatii = await Aplicatie.findAll();
        res.json(aplicatii);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/aplicatii', async (req, res) => {
    try {
        const aplicatie = await Aplicatie.create(req.body);
        res.status(201).json(aplicatie);
    } catch (err) {
        res.status(500).send(err.message);
    }
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

// Ruta fallback pentru React Router
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Sincronizarea cu baza de date și pornirea serverului
sequelize.sync().then(() => {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
}).catch(err => console.error('Eroare la sincronizarea cu baza de date:', err));
