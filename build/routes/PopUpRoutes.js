"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PopUpController_1 = __importDefault(require("../controllers/PopUpController"));
class ActorMoviesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/actors/:id", PopUpController_1.default.getMoviesActor);
        this.router.get("/movies/:id", PopUpController_1.default.getActorsMovie);
        this.router.get("/", PopUpController_1.default.get);
        this.router.get("/:id_actor/:id_movie", PopUpController_1.default.getOne);
        this.router.post("/", PopUpController_1.default.create);
        this.router.put("/:id_actor/:id_movie", PopUpController_1.default.update);
        this.router.delete("/:id_actor/:id_movie", PopUpController_1.default.delete);
    }
}
const actorMoviesRoutes = new ActorMoviesRoutes();
exports.default = actorMoviesRoutes.router;
