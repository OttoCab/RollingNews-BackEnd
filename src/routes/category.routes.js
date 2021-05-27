import {Router} from 'express';
import categoryCtrl from '../controllers/category.controllers'

const routerCategory = Router();

// Crea las rutas
routerCategory.route('/').get(categoryCtrl.getPrueba)

export default routerCategory;