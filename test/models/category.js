import { Sequelize } from "sequelize";

const createCategoryModel = (db) => {
  const Category = db.define("category", {
    name: {
      type: Sequelize.STRING,
    },
  });
  Category.associate = (models) => {
    Category.hasMany(models.Menu);
  };

  return Category;
};

export default createCategoryModel;
