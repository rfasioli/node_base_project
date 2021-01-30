import express from "express";
import bodyParser from "body-parser";

module.exports = function (application: express.Express) {
    application.use(bodyParser.json());
}