import { Router } from "express";
import popUpController from "../controllers/PopUpController";

class ActorMoviesRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/actors/:id", popUpController.getMoviesActor);
    this.router.get("/movies/:id", popUpController.getActorsMovie);
    this.router.get("/", popUpController.get);
    this.router.get("/:id_actor/:id_movie", popUpController.getOne);
    this.router.post("/", popUpController.create);
    this.router.put("/:id_actor/:id_movie", popUpController.update);
    this.router.delete("/:id_actor/:id_movie", popUpController.delete);
  }
}

const actorMoviesRoutes = new ActorMoviesRoutes();
export default actorMoviesRoutes.router;