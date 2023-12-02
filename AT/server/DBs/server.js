const Sequelize = require ('sequelize')

const sequelize = new Sequelize({
  dialect:'sqlite',
  storage:'DBs/database.sqlite',
  logging: false
})

sequelize.sync()
.then(()=>console.log("Modelele construite cu succes"))

