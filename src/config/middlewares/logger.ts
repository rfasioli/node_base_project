import express from "express";

function loggerMiddleware(
    request: express.Request,
    response: express.Response,
    next: any
  ) {
    console.log(`${request.method} ${request.path}`);
    next();
  }
  
module.exports = function (application: express.Express) {
    application.use(loggerMiddleware);
}