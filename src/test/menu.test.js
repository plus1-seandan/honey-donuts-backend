import chai from "chai";
import chaiHttp from "chai-http";
import { initServer } from "../index"; //need this import for server access
import fs from "fs";

import { createTestDb, initSequelize, createModels, dropDb } from "./dbTest";
import { menuData, reviewData } from "./dataDump";
import db from "../db";

chai.should();
chai.use(chaiHttp);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

before(async () => {
  console.log("**********************TEST START**********************");
  // await createTestDb();
  // const db = await initSequelize();
  // await createModels(db);
  await sleep(1000);
  await db.query(menuData);
});

describe("Menus API", () => {
  describe("GET /menu", () => {
    it("It should get the whole menu by category", (done) => {
      chai
        .request("http://localhost:8081")
        .get("/menu")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("array");
          res.body.length.should.be.eql(4);
          done();
        });
    });
    it("It should one item from the menu", (done) => {
      chai
        .request("http://localhost:8081")
        .get("/menu?id=1")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.should.be.an("object");
          res.body.should.have.property("item");
          res.body.should.have.property("options");
          res.body.options.length.should.be.eql(2);
          done();
        });
    });
  });
});
after(async () => {
  // dropDb();
});
