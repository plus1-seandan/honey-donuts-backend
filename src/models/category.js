import { Sequelize } from "sequelize";
import db from "../db";

const Category = db.define("category", {
  name: {
    type: Sequelize.STRING,
  },
});
Category.associate = (models) => {
  Category.hasMany(models.Menu);
};

export default Category;
