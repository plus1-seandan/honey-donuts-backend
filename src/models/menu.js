import { Sequelize } from "sequelize";
import db from "../db";

const Menu = db.define("menu", {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
  },
});
Menu.associate = (models) => {
  //messages belong to a channel
  Menu.belongsTo(models.Category);
  Menu.hasMany(models.Option);
};

export default Menu;
