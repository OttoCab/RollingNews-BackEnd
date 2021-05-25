import mongoose, { Schema } from "mongoose";

const newsSchema = new Schema({
  categoriaNoticia:{
      type: String,
      required: true
  } ,
  idCategoriaNoticia:{
      type: Number,
      unique: true,
      required: true
  } ,
  tituloNoticia: {
    type: String,
    maxlength: 50,
    required: true
},
  autorNoticia: {
    type: String,
    maxlength: 30,
    required: true
},
  fechaNoticia: {


    required: true
  },
  contenidoNoticia: {
    type: String,
    maxlength: 150,
    required: true
},
});

const News = mongoose.model('Noticia', newsSchema) ;

export default News;
