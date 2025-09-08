import Products from "../../models/products.js";

async function createProductsController(request, response) {
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
}

export default createProductsController;
