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
class MoviesController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield database_1.default.query(`SELECT * FROM movies`);
                const data = query.rows;
                res.json({ message: "Get movies", data });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield database_1.default.query(`SELECT * FROM movies WHERE id =${req.params.id}`);
                const data = query.rows;
                res.json({ message: "Get one movie", data });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, premiere, gender, photo } = req.body;
                const query = yield database_1.default.query(`INSERT INTO movies (title, premiere,gender,photo) VALUES ($1, $2, $3, $4)`, [title, premiere, gender, photo]);
                res.json({ message: "Movie Save" });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const { title, premiere, gender, photo } = req.body;
                const query = yield database_1.default.query(`UPDATE movies SET title = $1, premiere = $2 , gender = $3 ,photo = $4 WHERE id = $5`, [title, premiere, gender, photo, id]);
                res.json({ message: "Movie UPDATED" });
            }
            catch (error) { }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const query = yield database_1.default.query(`DELETE FROM movies WHERE id = $1`, [id]);
                res.json({ message: "Movie DELETE" });
            }
            catch (error) { }
        });
    }
}
const moviesController = new MoviesController();
exports.default = moviesController;
