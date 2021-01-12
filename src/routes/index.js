import express from "express";
import menuRouter from "./menu";
import reviewRouter from "./review";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("server is up and running");
});

router.use("/menu", menuRouter);
router.use("/review", reviewRouter);

export default router;
