import Products from "../../models/products.js";

async function listProductsController(request, response) {
  try{
    const products = await Products.findAll();
  return response.status(200).json(products);
  }catch(error){
    return response.status(500).json(error)
  }
}

export default listProductsController;
