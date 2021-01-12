import express from "express";
import { Op, QueryTypes } from "sequelize";
import models from "../models";
import db from "../db";

const router = express.Router();
const PAGE_SIZE = 10;

router.get("/", async (req, res) => {
  const reviewCount = await models.Review.count({
    where: { comments: { [Op.like]: `%${req.query.search}%` } },
  });
  const pages = parseInt(reviewCount / PAGE_SIZE);

  const reviews = await getPage(req.query.page, req.query.search);

  res.send({ pages, reviews });
});

router.post("/", async (req, res) => {
  try {
    const data = await models.Review.create(req.body);
    res.send(true);
  } catch (err) {
    console.log(err.message);
    res.send(false);
  }
});

const getPage = async (page, query) => {
  const skip = (page - 1) * PAGE_SIZE;
  return models.Review.findAll({
    where: { comments: { [Op.like]: `%${query}%` } },
    offset: skip,
    limit: PAGE_SIZE,
    order: [["created_at", "DESC"]],
  });
};

export default router;
