import Products from "../../models/products.js";

async function listProductsController(request, response) {
  const products = await Products.findAll();
  return response.status(200).json(products);
}

export default listProductsController;
