import News from "../models/New";
const newsCtrl = {};

newsCtrl.getPrueba = (req, res) => {
  res.send("Prueba desde controlador noticias");
};

newsCtrl.crearNoticia = async (req, res) => {
  try {
    // Crear un objeto que posteriormente guardo en la DB
    const nuevaNoticia = new News({
      categoriaNoticia: req.body.categoriaNoticia,
      idCategoriaNoticia: req.body.idCategoriaNoticia,
      tituloNoticia: req.body.tituloNoticia,
      autorNoticia: req.body.autorNoticia,
      fechaNoticia: req.body.fechaNoticia,
      imagenNoticia: req.body.imagenNoticia,
      contenidoNoticia: req.body.contenidoNoticia,
    });
    // Guardar en la BD
    await nuevaNoticia.save();
    res.status(201).json({
      msj: "Se agrego la Noticia",
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      msj: "error al agregar la noticia",
    });
  }
};

newsCtrl.listarNoticias = async (req, res) => {
  try {
    // Obtener un arreglo de Noticias
    const arrayNews = await News.find();
    res.status(200).json(arrayNews);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msj: "Error: no se pudo enviar la lista de Noticias",
    });
  }
};

newsCtrl.deleteNews = async (req, res) => {
  // console.log(req.params.idNoticia);
  try {
    await News.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msj: "La noticia fue eliminada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msj: "No se encontro el objeto y no pudo ser eliminado",
    });
  }
};

newsCtrl.editarNoticia = async (req, res) => {
  try {
    await News.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      msj: "La Noticia fue modificada",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msj: "No se pudo editar la noticia",
    });
  }
};

newsCtrl.obtenerNoticia = async (req, res) => {
  try {
    // Obtener un producto
    const newsEncontrado = await News.findById(req.params.id);
    res.status(200).json(newsEncontrado); 
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msj: "No se encontro la noticia",
    });
  }
};
export default newsCtrl;
