import Sequelize from "sequelize";

// import Menu from "./menu";
// import Category from "./category";
// import Option from "./option";
// import Review from "./review";
import createCategoryModel from "./category";
import createMenuModel from "./menu";
import createOptionModel from "./option";
import createReviewModel from "./review";

const buildModels = (db) => {
  const models = {
    Category: createCategoryModel(db),
    Menu: createMenuModel(db),
    Option: createOptionModel(db),
    Review: createReviewModel(db),
  };

  //if a model has associate attribute, create the associations
  Object.keys(models).forEach((modelName) => {
    if ("associate" in models[modelName]) {
      models[modelName].associate(models);
    }
  });

  models.sequelize = db;
  models.Sequelize = Sequelize;

  return models;
};

export default buildModels;
