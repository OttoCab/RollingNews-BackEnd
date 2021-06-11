import Category from "../models/Category";
const categoryCtrl = {};

// categoryCtrl.getPrueba = (req, res) => {
//   res.send("Prueba desde controlador Categoria");
// };

categoryCtrl.crearCategoria = async (req, res) => {
  try {
    const nuevaCategoria = new Category({
      nombreCategoria: req.body.nombreCategoria,
      codCat: req.body.codCat,
    });
    await nuevaCategoria.save();
    res.status(201).json({
      msj: "Se agrego la nueva Categoria",
    });
  } catch (error) {
    res.status(500).json({
      msj: "Error al agregar la Categoria",
    });
  }
};

categoryCtrl.listarCategorias = async (req, res) => {
  try {
    const arrayCategory = await Category.find();
    res.status(200).json(arrayCategory);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msj: "Error: no se pudo enviar la lista de Categorias",
    });
  }
};

categoryCtrl.deleteCategory = async (req, res) => {
  console.log(req.params.idCategoria);
  try {
    await Category.findByIdAndDelete(req.params.idCategoria);
    res.status(200).json({
      msj: "La Categoria fue eliminada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msj: "No se encontro el objeto y no pudo ser eliminado",
    });
  }
};

categoryCtrl.editarCategoria = async (req, res) => {
  try {
    await Category.findByIdAndUpdate(req.params.idCategoria, req.body);
    res.status(200).json({
      msj: "La Categoria fue modificado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msj: "No se pudo editar la Categoria",
    });
  }
};

categoryCtrl.obtenerCategoria = async (req, res) => {
  try {
    const categoriaEncontrada = await Category.findById(req.params.idCategoria);
    res.status(200).json(categoriaEncontrada)
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msj: "No se encontro el producto"
    })
  }
}

export default categoryCtrl;
