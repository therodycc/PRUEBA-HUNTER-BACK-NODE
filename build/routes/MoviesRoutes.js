"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MoviesController_1 = __importDefault(require("../controllers/MoviesController"));
class MoviesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", MoviesController_1.default.get);
        this.router.get("/:id", MoviesController_1.default.getOne);
        this.router.post("/", MoviesController_1.default.create);
        this.router.put("/:id", MoviesController_1.default.update);
        this.router.delete("/:id", MoviesController_1.default.delete);
    }
}
const moviesRoutes = new MoviesRoutes();
exports.default = moviesRoutes.router;
