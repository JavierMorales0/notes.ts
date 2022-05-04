"use strict";
/**
 * App file for the api
 * This is the Api Class
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
// Import the routes
const Note_1 = __importDefault(require("./routes/Note"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use("/api/notes", Note_1.default);
    }
    // port can be number or string
    listen(port) {
        this.app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    }
}
exports.default = App;
