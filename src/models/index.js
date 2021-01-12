import Sequelize from "sequelize";

import Menu from "./menu";
import Category from "./category";
import Option from "./option";
import Review from "./review";
import db from "../db";

const models = {
  Menu,
  Category,
  Option,
  Review,
};

//if a model has associate attribute, create the associations
Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = db;
models.Sequelize = Sequelize;

export default models;
