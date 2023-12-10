//const Sequelize = require('sequelize');
import {Sequelize} from "sequelize";

const sequelize = new Sequelize('candidati', 'root', 'Arra1987#', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;
