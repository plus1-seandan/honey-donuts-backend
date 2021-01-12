import { Sequelize } from "sequelize";
import db from "../db";

const Option = db.define("option", {
  type: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
  },
});
Option.associate = (models) => {
  //messages belong to a channel
  Option.belongsTo(models.Menu);
};

export default Option;
