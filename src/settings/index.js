import dotenv from "dotenv";

dotenv.config();
const ENV = {
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_NAME_TEST: process.env.DATABASE_NAME_TEST,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PWR: process.env.DATABASE_PWR,
  SERVER_PORT: parseInt(process.env.SERVER_PORT),
};

export default ENV;
