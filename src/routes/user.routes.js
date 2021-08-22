import { Router } from "express";
import userCtrl from "../controllers/user.controllers";

const routerUser = Router();

// crear las rutas
routerUser.route("/").get(userCtrl.obtenerUser).post(userCtrl.crearUsuario);

export default routerUser;
