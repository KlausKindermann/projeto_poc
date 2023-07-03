import { Request, Response } from "express";
import * as filmsService from "../service/films-service"
import { filmResult} from "../protocols";
import httpStatus from "http-status";

export function createFilm(req: Request, res: Response){
    const filmsResult = req.body as filmResult;
    filmsService.createFilm(filmsResult);
    res.sendStatus(httpStatus.CREATED);
}

export function getFilms(req: Request, res: Response){
    const films = filmsService.getFilms();
    res.send(films);
}