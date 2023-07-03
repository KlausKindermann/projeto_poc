import express, { Request, Response, json } from "express";
import filmsRouter from "./routers/films-router";

const app = express();
app.use (json());

app.use(filmsRouter)

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);  
})