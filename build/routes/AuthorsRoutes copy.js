"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthorsController_1 = __importDefault(require("../controllers/AuthorsController"));
class AuthorsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", AuthorsController_1.default.get);
        this.router.get("/:id", AuthorsController_1.default.getOne);
        this.router.post("/", AuthorsController_1.default.create);
        this.router.put("/:id", AuthorsController_1.default.update);
        this.router.delete("/:id", AuthorsController_1.default.delete);
    }
}
const authorsRoutes = new AuthorsRoutes();
exports.default = authorsRoutes.router;
