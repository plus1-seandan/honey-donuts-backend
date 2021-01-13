import { Sequelize } from "sequelize";

const createOptionModel = (db) => {
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

  return Option;
};
export default createOptionModel;
