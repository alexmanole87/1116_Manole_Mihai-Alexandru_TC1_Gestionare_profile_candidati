import { DataTypes } from 'sequelize';
import sequelize from './db.js';
import Candidat from './candidati.js';

const Aplicatie = sequelize.define('Aplicatie', {
    // ID-ul unic pentru fiecare aplicație
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Titlul aplicației
    titlu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Descrierea aplicației
    descriere: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    // Pozitia vizată în cadrul aplicației
    pozitiaVizata: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Numele companiei vizate
    numeleCompanieiVizate: {
        type: DataTypes.STRING,
    }
});

// Stabilirea relației cu modelul Candidat
Candidat.hasMany(Aplicatie, { foreignKey: 'candidatId' });
Aplicatie.belongsTo(Candidat, { foreignKey: 'candidatId' });

export default Aplicatie;
