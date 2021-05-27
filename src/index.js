import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from 'path'; // objeto que me ayuda obetener la ruta
import './database';
import newsRoutes from './routes/news.routes';
import categoryRoutes from './routes/category.routes'

// Config
// Creo una instancia de express
const app = express(); //guardo metodos que tiene express en el objeto app

app.set("port", process.env.PORT || 4000); //port=puerto, numero=nro del puerto

app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
}); //le decimos al backend que escuche ese puerto (express)

//Herramientas Extras (Middlewares)

app.use(morgan('dev')); //normalmente el que su utiliza es el q dice dev; son parametros de colores;  pero hay mas
app.use(cors()); // solamente el llamarlo hace la tarea
app.use(express.json()); //PREGUNTAR
app.use(express.urlencoded({extended:true})) //debo pasarle el obejto extended
app.use(express.static(path.join(__dirname, "../public")))
//Rutas

// app.get('/', (req, res) =>{
//         res.send("esta es una ruta de prueba");
// })
app.use('/api/News', newsRoutes); //localhost:4000/api/News/


app.use('/api/Categorias', categoryRoutes); //localhost:4000/api/Categorias/

