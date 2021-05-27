import Category from "../models/Category";
const categoryCtrl = {};

categoryCtrl.getPrueba = (req, res) => {
  res.send("Prueba desde controlador Categoria");
};

categoryCtrl.crearCategoria = async (req, res) => {
  try {
    const nuevaCategoria = new Category({
      nombreCategoria: req.body.nombreCategoria,
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

categoryCtrl.deleteCategory = (req, res)=>{
  console.log(req.params.idCategoria);
}

export default categoryCtrl;
