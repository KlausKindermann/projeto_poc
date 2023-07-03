import { Router } from "express";
import * as filmsController from "../controllers/films-controller"
import filmSchema from "../schemas/film-schema";
import { validateSchema } from "../midlewares/schema-validator";


const filmsRouter = Router();

filmsRouter.get("/films", filmsController.getFilms);
filmsRouter.post("/film", validateSchema(filmSchema), filmsController.createFilm);

export default filmsRouter;