"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
function loggerMiddleware(request, response, next) {
    console.log(`${request.method} ${request.path}`);
    next();
}
const app = express_1.default();
app.use(loggerMiddleware);
app.use(body_parser_1.default.json());
app.get("/", (request, response) => {
    response.send("Hello world!");
});
exports.default = app;
//# sourceMappingURL=server.js.map