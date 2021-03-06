"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../db/database"));
class PopUpController {
    //peliculas en las que trabajo un actor
    getMoviesActor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield database_1.default.query(`
      select movies.id, movies.title,movies.premiere ,movies.photo,movies.gender
      from movies
      inner join actors_movies 
      on movies.id = actors_movies.id_movie 
      inner join authors
      on authors.id = actors_movies.id_actor
      where actors_movies.id_actor = $1`, [req.params.id]);
                const data = query.rows;
                res.json({ message: "Get movies from an actor", data });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    // todos los autores de una pelicula
    getActorsMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield database_1.default.query(`
      select authors.id, authors.full_name,authors.gender, authors.photo, authors.born 
      from movies
      inner join actors_movies 
      on movies.id = actors_movies.id_movie 
      inner join authors
      on authors.id = actors_movies.id_actor
      where actors_movies.id_movie = $1`, [req.params.id]);
                const data = query.rows;
                res.json({ message: "Get actors from an movie", data });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield database_1.default.query(`SELECT * FROM actors_movies`);
                const data = query.rows;
                res.json({ message: "Get PopUp", data });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_actor, id_movie } = req.params;
                const query = yield database_1.default.query(`SELECT * FROM actors_movies WHERE id_actor = $1 AND id_movie = $2`, [id_actor, id_movie]);
                const data = query.rows;
                res.json({ message: "Get one PopUp", data });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_actor, id_movie } = req.body;
                const query = yield database_1.default.query(`INSERT INTO actors_movies (id_actor, id_movie ) VALUES ($1, $2)`, [id_actor, id_movie]);
                res.json({ message: "PopUp Save" });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_ac, id_mov } = req.params;
                const { id_actor, id_movie } = req.body;
                const query = yield database_1.default.query(`UPDATE actors_movies SET id_actor = $1, id_movie = $2  WHERE id_actor = $3 AND id_movie = $4`, [id_actor, id_movie, id_ac, id_mov]);
                res.json({ message: "PopUp UPDATED" });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_actor, id_movie } = req.params;
                const query = yield database_1.default.query(`DELETE FROM actors_movies WHERE id_actor = $1 AND id_movie = $2`, [id_actor, id_movie]);
                res.json({ message: "PopUp DELETE" });
            }
            catch (error) { }
        });
    }
}
const popUpController = new PopUpController();
exports.default = popUpController;
