import express from "express";
import cors from "cors";

import db from "./db";
import models from "./models";
import router from "./routes";
import bodyParser from "body-parser";
import ENV from "./settings";

export const initServer = async () => {
  const PORT = 8081;
  const app = express();
  app.use(cors("*"));
  //json parsers need to come before router
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(router);

  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true }));

  //sync database
  // await
  await db.sync({
    models,
    // force: process.env.NODE_ENV === "test",
    logging: true,
  }); //force syncs database for developments

  app.listen(PORT, (err) => {
    if (!err) {
      console.log(`Server is running on ${PORT}`);
    } else {
      console.log(err);
    }
  });
};

try {
  initServer();
} catch (e) {
  console.log(e);
}
