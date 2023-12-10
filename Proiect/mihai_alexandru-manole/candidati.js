import Sequelize, {DataTypes} from 'sequelize';
import sequelize from "./db.js";


//const Sequelize = require('sequelize');
// const sequelize = require('db');

const Candidat = sequelize.define('candidat', {
    nume: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    parola: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cv: {
        type: DataTypes.STRING, // Calea către fișierul încărcat
        allowNull: true // CV-ul poate fi opțional
    }

});

export default Candidat;
