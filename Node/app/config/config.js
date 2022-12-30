import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "tnv-final-project",
  username: "root",
  password: "root",
  host: "localhost",
  port: 1234,
  dialect: "mysql",
});

export default db;
