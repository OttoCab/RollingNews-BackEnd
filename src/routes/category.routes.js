import {Router} from 'express';
import categoryCtrl from '../controllers/category.controllers'

const routerCategory = Router();

// Crea las rutas
routerCategory.route('/')
    .get(categoryCtrl.listarCategorias)
    .post(categoryCtrl.crearCategoria);

routerCategory
    .route('/idCategoria')
    .delete(categoryCtrl.deleteCategoria)
    .put(categoryCtrl.editarCategoria);

export default routerCategory;
