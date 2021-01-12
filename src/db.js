import { Sequelize } from "sequelize";
import ENV from "./settings";

const dbName =
  process.env.NODE_ENV === "test" ? ENV.DATABASE_NAME_TEST : ENV.DATABASE_NAME;

const db = new Sequelize(dbName, ENV.DATABASE_USER, ENV.DATABASE_PWR, {
  host: process.env.DB_HOST || "localhost",
  dialect: "postgres",
  define: {
    underscored: true,
  },
  dialectOptions: {
    multipleStatements: true,
  },
});

export default db;
