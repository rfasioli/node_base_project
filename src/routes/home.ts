import express from "express";

module.exports = function (application: express.Express) {
  application.route("/")
    .get(function (request: express.Request, response: express.Response) {
      response.send(request.body);
    });
};
