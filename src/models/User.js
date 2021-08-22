import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    nombreUsuario:{
        type:String,
        required: true
    },
    nombreClave:{
        type: String,
        required:true
    }
});

const User = mongoose.model("usuario", userSchema);

export default User;