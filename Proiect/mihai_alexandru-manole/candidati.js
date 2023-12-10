import { DataTypes } from 'sequelize';
import sequelize from './db.js'; // Importare instanța sequelize

const Candidat = sequelize.define('Candidat', {
    // ID-ul unic pentru fiecare candidat
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Numele candidatului
    nume: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Prenumele candidatului
    prenume: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Emailul candidatului
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
});

export default Candidat;
