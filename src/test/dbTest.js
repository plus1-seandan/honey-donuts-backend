//initialize temporary test database
import Sequelize from "sequelize";
import pg from "pg";

import buildModels from "./models";

export const createTestDb = async () => {
  const pool = new pg.Pool({
    user: "postgres",
    host: process.env.DB_HOST || "localhost",
    database: "postgres",
    password: "postgres",
    port: "5432",
  });
  await pool.query(`CREATE DATABASE honeydonutstest;`);
  console.log("finish creating database");
};

export const initSequelize = async () => {
  console.log("begin creating sequelize connection");
  const db = await new Sequelize("honeydonutstest", "postgres", "postgres", {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    define: {
      underscored: true,
    },
  });
  return db;
};

export const createModels = async (db) => {
  console.log("create models");

  const models = await buildModels(db);
  await db.sync({
    models,
    logging: false,
  });
};

export const dropDb = async () => {
  const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: "5432",
  });
  await pool.query(`DROP DATABASE honeydonutstest WITH (FORCE);`);
  console.log("finish dropping database");
};
