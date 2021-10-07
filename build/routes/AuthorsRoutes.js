"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ActorsController_1 = __importDefault(require("../controllers/ActorsController"));
class AuthorsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", ActorsController_1.default.get);
        this.router.get("/:id", ActorsController_1.default.getOne);
        this.router.post("/", ActorsController_1.default.create);
        this.router.put("/:id", ActorsController_1.default.update);
        this.router.delete("/:id", ActorsController_1.default.delete);
    }
}
const authorsRoutes = new AuthorsRoutes();
exports.default = authorsRoutes.router;
