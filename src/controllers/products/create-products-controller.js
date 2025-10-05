import Products from "../../models/products.js";

async function createProductsController(request, response) {
  try{
    const productsData = request.body;

  const products = await Products.create({
    name: productsData.name,
    price: productsData.price,
    brand: productsData.brand,
    stock: productsData.stock,
    description: productsData.description,
    image: productsData.image,
  });

  return response.status(201).json(products);
  }catch(rror){
    return response.status(500).json(error)
  }
}

export default createProductsController;
