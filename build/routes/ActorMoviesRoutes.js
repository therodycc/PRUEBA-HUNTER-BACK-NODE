"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Actors_MoviesController_1 = __importDefault(require("../controllers/Actors_MoviesController"));
class ActorMoviesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/actors/:id", Actors_MoviesController_1.default.getMoviesActor);
        this.router.get("/movies/:id", Actors_MoviesController_1.default.getActorsMovie);
        this.router.post("/", Actors_MoviesController_1.default.create);
        this.router.put("/:id", Actors_MoviesController_1.default.update);
        this.router.delete("/:id", Actors_MoviesController_1.default.delete);
    }
}
const actorMoviesRoutes = new ActorMoviesRoutes();
exports.default = actorMoviesRoutes.router;
