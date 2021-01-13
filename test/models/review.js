import { Sequelize } from "sequelize";

const createReviewModel = (db) => {
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
  return Review;
};

export default createReviewModel;
