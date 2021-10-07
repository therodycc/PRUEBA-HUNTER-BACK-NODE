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
class AuthorsController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield database_1.default.query("  SELECT * FROM authors");
                const tablaInfo = data.rows;
                res.json({ message: "Get authors", tablaInfo });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield database_1.default.query(`SELECT * FROM authors WHERE id =${req.params.id}`);
                const tablaInfo = data.rows;
                res.json({ message: "Get one author", tablaInfo });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { full_name, born, gender, photo } = req.body;
                const data = yield database_1.default.query(`INSERT into authors(full_name, born, gender, photo) VALUES ($1, $2, $3, $4)`, [full_name, born, gender, photo]);
                res.json({ message: "Author Save" });
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
                const { full_name, born, gender, photo } = req.body;
                const data = yield database_1.default.query(`UPDATE authors SET 
        full_name = $1, 
        born = $2 ,
        gender = $3 ,
        photo = $4 
        WHERE id = $5`, [full_name, born, gender, photo, id]);
                res.json({ message: "Author UPDATED" });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = yield database_1.default.query(`DELETE FROM authors WHERE id = $1`, [id]);
                res.json({ message: "Author DELETE" });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
}
const authorsController = new AuthorsController();
exports.default = authorsController;
