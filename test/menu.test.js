import chai from "chai";
import chaiHttp from "chai-http";
import { initServer } from "../src"; //need this import for server access
import fs from "fs";

import { createTestDb, initSequelize, createModels, dropDb } from "./dbTest";

chai.should();
chai.use(chaiHttp);

before(async () => {
  console.log("**********************TEST START**********************");
  await createTestDb();
  const db = await initSequelize();
  await createModels(db);
  const sql_string = fs.readFileSync(__dirname + "/menu.sql", "utf8");
  await db.query(sql_string);
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
  dropDb();
});
