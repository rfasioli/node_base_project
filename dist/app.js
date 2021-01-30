"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./config/server"));
server_1.default.listen(5000, function () {
    console.log('Servidor conectado na porta 5000');
});
//# sourceMappingURL=app.js.map