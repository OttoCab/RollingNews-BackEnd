import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  nombreCategoria: {
      type: String,
      maxlength: 25,
      require: true
  },
});

const Category = mongoose.model("Noticia", categorySchema);

export default Category;
