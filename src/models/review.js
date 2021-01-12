import { Sequelize } from "sequelize";
import db from "../db";

const Review = db.define("review", {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  comments: {
    type: Sequelize.TEXT,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
});

// Menu.associate = (models) => {
//   //messages belong to a channel
//   Menu.belongsTo(models.Category);
//   Menu.hasMany(models.Option);
// };

export default Review;
