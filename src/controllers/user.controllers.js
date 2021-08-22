import User from "../models/User";
const userCtrl = {};

userCtrl.obtenerUser = (req, res)=>{
    res.send('prueba desde el controlador');
}

userCtrl.crearUsuario = async(req,res)=>{
    try{
        //se crea el usuario para posteriormente guardarlo
        const nuevoUsuario = new User({
            nombreUsuario: req.body.nombreUsuario,
            nombreClave: req.body.nombreClave
        });
        //guardo en la db
        await nuevoUsuario.save();
        res.status(201).json({
            mensaje: 'se agrego el usuario'
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: 'Error al agregar el usuario'
        });
    }
}

export default userCtrl;