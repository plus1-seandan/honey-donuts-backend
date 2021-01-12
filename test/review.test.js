import chai from "chai";
import chaiHttp from "chai-http";
import { initServer } from "../src"; //starts up the server before running tests
import db from "../src/db";
import fs from "fs";
import models from "../src/models";

chai.should();
chai.use(chaiHttp);

before(async () => {
  //load test data
  const sql_string = fs.readFileSync(__dirname + "/review.sql", "utf8");
  await db.query(sql_string);
});

describe("Reviews API", () => {
  describe("GET /review", () => {
    it("It should get first page of reviews", (done) => {
      chai
        .request("http://localhost:8081")
        .get("/review?search=&page=1")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.an("object");
          res.body.should.have.property("pages");
          res.body.should.have.property("reviews");
          res.body.reviews.should.be.an("array");
          res.body.reviews.length.should.be.eql(10);
          res.body.reviews[0].id.should.be.eql(46); //first item of page
          res.body.reviews[9].id.should.be.eql(227); //last item of page
          done();
        });
    });
    it("It should get second page of reviews", (done) => {
      chai
        .request("http://localhost:8081")
        .get("/review?search=&page=2")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.an("object");
          res.body.should.have.property("pages");
          res.body.should.have.property("reviews");
          res.body.reviews.should.be.an("array");
          res.body.reviews.length.should.be.eql(10);
          res.body.reviews[0].id.should.be.eql(419); //first item of page
          res.body.reviews[9].id.should.be.eql(121); //last item of page
          done();
        });
    });
    it("It should get first page of search results", (done) => {
      chai
        .request("http://localhost:8081")
        .get("/review?search=hi&page=1")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.an("object");
          res.body.should.have.property("pages");
          res.body.should.have.property("reviews");
          res.body.reviews.should.be.an("array");
          res.body.reviews.length.should.be.eql(10);
          res.body.reviews[0].id.should.be.eql(298); //first item of page
          res.body.reviews[9].id.should.be.eql(28); //last item of page
          done();
        });
    });
  });
});

after(() => {
  models.Review.truncate({ restartIdentity: true, cascade: true });
  models.Option.truncate({ restartIdentity: true, cascade: true });
  models.Menu.truncate({ restartIdentity: true, cascade: true });
  models.Category.truncate({ restartIdentity: true, cascade: true });
});
