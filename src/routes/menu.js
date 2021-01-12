import express from "express";
import { QueryTypes } from "sequelize";
import models from "../models";
import db from "../db";

const router = express.Router();

router.get("/", async (req, res) => {
  //search by category
  if (req.query.category) {
    const category_id = req.query.category;
    const data = await models.Menu.findAll({
      where: {
        category_id,
      },
    });
    res.send(data);
  } else if (req.query.id) {
    const id = parseInt(req.query.id);
    const item = await models.Menu.findOne({ where: { id }, raw: true });
    const options = await db.query(
      `
        select * from options 
        where menu_id = ${id} 
        `,
      {
        type: QueryTypes.SELECT,
      }
    );
    const data = { item: item, options: options };
    res.send(data);
  } else {
    let menu = [];
    const categories = await models.Category.findAll({ raw: true });

    for (let i = 0, l = categories.length; i < l; i++) {
      let category = categories[i];
      const items = await models.Menu.findAll({
        where: { categoryId: category.id },
        raw: true,
      });
      menu.push({ category, items });
    }
    res.send(menu);
  }

  // else if (req.query.id !== "undefined") {
  //   //search by id
  //   const menuId = req.query.id;
  //   const data = await models.Menu.findOne(
  //     {
  //       where: {
  //         id: menuId,
  //       },
  //     },
  //     { raw: true }
  //   );
  //   res.send(data);
});

export default router;
