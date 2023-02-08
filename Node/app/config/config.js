import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "preferiti_db",
  username: "root",
  password: "Rt28p4",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
