import { Request, Response } from "express";
import pool from "../db/database";

class ActorsController {
  public async get(req: Request, res: Response) {
    try {
      const query = await pool.query("  SELECT * FROM authors");
      const data = query.rows;
      res.json({ message: "Get actors", data });
    } catch (error) {
      res.json(error);
    }
  }

  public async getOne(req: Request, res: Response) {
    try {
      const query = await pool.query(
        `SELECT * FROM authors WHERE id =${req.params.id}`
      );
      const data = query.rows[0];
      res.json({ message: "Get one actor", data });
    } catch (error) {
      res.json(error);
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { full_name, born, gender, photo } = req.body;
      const query = await pool.query(
        `INSERT into authors(full_name, born, gender, photo) VALUES ($1, $2, $3, $4)`,
        [full_name, born, gender, photo]
      );
      res.json({ message: "Actor Save" });
    } catch (error) {
      res.json(error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const { full_name, born, gender, photo } = req.body;
      const query = await pool.query(
        `UPDATE authors SET 
        full_name = $1, 
        born = $2 ,
        gender = $3 ,
        photo = $4 
        WHERE id = $5`,
        [full_name, born, gender, photo, id]
      );
      res.json({ message: "Actors UPDATED" });
    } catch (error) {
      res.json(error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const query = await pool.query(`DELETE FROM authors WHERE id = $1`, [id]);
      res.json({ message: "Actor DELETE" });
    } catch (error) {
      res.json(error);
    }
  }
}

const actorsController = new ActorsController();
export default actorsController;
