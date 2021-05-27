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
        msj: 'error al agregar la noticia'
    });
  }
};
export default newsCtrl;
