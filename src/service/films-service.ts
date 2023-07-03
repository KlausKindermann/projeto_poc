import { filmResult } from "../protocols";
import * as filmsRepository from "../repositories/films-repository";

export function createFilm(film: filmResult){
    return filmsRepository.createFilm(film);
}

export function getFilms(){
    return filmsRepository.getFilms();
}