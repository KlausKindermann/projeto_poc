import { Router } from "express";
import * as filmsController from "../controllers/films-controller"

const filmsRouter = Router();

filmsRouter.get("/films", filmsController.getFilms);
filmsRouter.post("/film", filmsController.createFilm);

export default filmsRouter;