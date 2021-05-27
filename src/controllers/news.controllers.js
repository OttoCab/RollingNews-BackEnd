const newsCtrl={};

newsCtrl.getPrueba = (req, res) =>{
    res.send('Prueba desde controlador noticias')
};

newsCtrl.crearNoticia = (req,res)=>{
    console.log('desde crearNotica');
}
export default newsCtrl;