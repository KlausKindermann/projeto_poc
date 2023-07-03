import { filmResult } from "../protocols";

const results: filmResult[] = [
    { name: "velozes e furiosos", score: 1}
]

export function createFilm(film: filmResult) {
    return results.push(film);
}

export function getFilms() {
    return results;
}