import { Router } from "express";
import newsCtrl from "../controllers/news.controllers";

const routerNews = Router();

// Crea las rutas
routerNews
  .route("/")
  .get(newsCtrl.listarNoticias)
  .post(newsCtrl.crearNoticia);

routerNews
  .route("/:idNews")
  .delete(newsCtrl.deleteNews)
  .put(newsCtrl.editarNoticia)
  .get(newsCtrl.obtenerNoticia);

export default routerNews;
