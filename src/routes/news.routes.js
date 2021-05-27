import { Router } from "express";
import newsCtrl from "../controllers/news.controllers";

const routerNews = Router();

// Crea las rutas
routerNews.route("/").get(newsCtrl.listarNoticias).post(newsCtrl.crearNoticia);

export default routerNews;
