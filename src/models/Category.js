import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  nombreCategoria: {
    type: String,
    require: true,
  },
  codCat: {
    type : String,
  }
});

const Category = mongoose.model("Categoria", categorySchema);

export default Category;
