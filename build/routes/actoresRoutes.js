"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AuthorsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/");
        this.router.get("/:id", consolesController.getOne);
        this.router.post("/", consolesController.create);
        this.router.put("/:id", consolesController.update);
        this.router.delete("/:id", consolesController.delete);
    }
}
const consoleRoutes = new ConsoleRoutes();
exports.default = consoleRoutes.router;
