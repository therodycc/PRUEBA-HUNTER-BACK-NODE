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
const dbSettings_1 = __importDefault(require("./dbSettings"));
const pg_1 = __importDefault(require("pg"));
const pool = new pg_1.default.Pool(dbSettings_1.default);
const getConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield pool.query("select * FROM movies")
        .then((res) => console.log("DB connected", res.rows))
        .catch(e => console.log(e));
});
exports.default = pool;
