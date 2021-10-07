import { Request, Response } from "express";
import pool from "../db/database";


class MoviesController {
  public async get(req: Request, res: Response) {
    try {
      const query = await pool.query(`SELECT * FROM movies`);
      const data = query.rows;
      res.json({ message: "Get movies", data });
    } catch (error) {
      res.json(error);
    }
  }

  public async getOne(req: Request, res: Response) {
    try {
      const query = await pool.query(
        `SELECT * FROM movies WHERE id =${req.params.id}`
      );
      const data = query.rows[0];
      res.json({ message: "Get one movie", data });
    } catch (error) {
      res.json(error);
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, premiere, gender, photo } = req.body;
      const query = await pool.query(
        `INSERT INTO movies (title, premiere,gender,photo) VALUES ($1, $2, $3, $4)`,
        [title, premiere, gender, photo]
      );
      res.json({ message: "Movie Save" });
    } catch (error) {
      res.json(error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const { title, premiere, gender, photo } = req.body;
      const query = await pool.query(
        `UPDATE movies SET title = $1, premiere = $2 , gender = $3 ,photo = $4 WHERE id = $5`,
        [title, premiere, gender, photo, id]
      );
      res.json({ message: "Movie UPDATED" });
    } catch (error) {}
  }

  public async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const query = await pool.query(`DELETE FROM movies WHERE id = $1`, [id]);
      res.json({ message: "Movie DELETE" });
    } catch (error) {}
  }
}

const moviesController = new MoviesController();
export default moviesController;
