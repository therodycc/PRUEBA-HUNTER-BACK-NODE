import express, { Application, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";

import "./db/database" 

import actorsRoutes from "./routes/ActorsRoutes";
import MoviesRoutes from "./routes/MoviesRoutes";
import popUpRoutes from "./routes/PopUpRoutes";


class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(urlencoded({ extended: false }));
  }

  routes(): void {
    this.app.use("/api/actors", actorsRoutes);
    this.app.use("/api/movies", MoviesRoutes);
    this.app.use("/api/popup", popUpRoutes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server on port ${this.app.get("port")}`);
    });
  }
}

const server = new Server();
server.start();

