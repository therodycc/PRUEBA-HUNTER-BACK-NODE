import { Request, Response } from "express";
import pool from "../db/database";

class PopUpController {
  //peliculas en las que trabajo un actor
  public async getMoviesActor(req: Request, res: Response) {
    try {
      const data = await pool.query(
        `
      select movies.title, authors.full_name 
      from movies
      inner join actors_movies 
      on movies.id = actors_movies.id_movie 
      inner join authors
      on authors.id = actors_movies.id_actor
      where actors_movies.id_actor = $1`,
        [req.params.id]
      );

      const tablaInfo = data.rows;
      res.json({ message: "Get movies from an actor", tablaInfo });
    } catch (error) {
      res.json(error);
    }
  }

  // todos los autores de una pelicula
  public async getActorsMovie(req: Request, res: Response) {
    try {
      const data = await pool.query(
        `
      select movies.title, authors.full_name 
      from movies
      inner join actors_movies 
      on movies.id = actors_movies.id_movie 
      inner join authors
      on authors.id = actors_movies.id_actor
      where actors_movies.id_movie = $1`,
        [req.params.id]
      );

      const tablaInfo = data.rows;
      res.json({ message: "Get actors from an movie", tablaInfo });
    } catch (error) {
      res.json(error);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const data = await pool.query(`SELECT * FROM actors_movies`);
      const tablaInfo = data.rows;
      res.json({ message: "Get PopUp", tablaInfo });
    } catch (error) {
      res.json(error);
    }
  }

  public async getOne(req: Request, res: Response) {
    try {
      const { id_actor, id_movie } = req.params;
      const data = await pool.query(
        `SELECT * FROM actors_movies WHERE id_actor = $1 AND id_movie = $2`,
        [id_actor, id_movie]
      );
      const tablaInfo = data.rows;
      res.json({ message: "Get one PopUp", tablaInfo });
    } catch (error) {
      res.json(error);
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { id_actor, id_movie } = req.body;
      const data = await pool.query(
        `INSERT INTO actors_movies (id_actor, id_movie ) VALUES ($1, $2)`,
        [id_actor, id_movie]
      );
      res.json({ message: "PopUp Save" });
    } catch (error) {
      res.json(error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id_ac, id_mov } = req.params;
      const { id_actor, id_movie } = req.body;
      const data = await pool.query(
        `UPDATE actors_movies SET id_actor = $1, id_movie = $2  WHERE id_actor = $3 AND id_movie = $4`,
        [id_actor, id_movie, id_ac, id_mov]
      );
      res.json({ message: "PopUp UPDATED" });
    } catch (error) {
      res.json(error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id_ac, id_mov } = req.params;
      const data = await pool.query(
        `DELETE FROM actors_movies WHERE id_actor = $1 AND id_movie = $2`,
        [id_ac, id_mov]
      );
      res.json({ message: "PopUp DELETE" });
    } catch (error) {}
  }
}

const popUpController = new PopUpController();
export default popUpController;
