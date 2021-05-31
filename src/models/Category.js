import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  nombreCategoria: {
    type: String,
    require: true,
  },
});

const Category = mongoose.model("Categoria", categorySchema);

export default Category;
