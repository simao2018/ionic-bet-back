"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_PORT = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_NAME = exports.DB_HOST = exports.DB_TYPE = exports.API_PORT = void 0;
const dotenv = require("dotenv");
dotenv.config();
let path;
switch (process.env.NODE_ENV) {
    case "dev":
        path = `${process.cwd()}/environment/.default.env`;
        break;
}
dotenv.config({ path: path });
exports.API_PORT = process.env.API_PORT;
exports.DB_TYPE = process.env.DB_TYPE;
exports.DB_HOST = process.env.DB_HOST;
exports.DB_NAME = process.env.DB_NAME;
exports.DB_USERNAME = process.env.DB_USERNAME;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_PORT = process.env.DB_PORT;
//# sourceMappingURL=config.js.map