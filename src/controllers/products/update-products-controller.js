import Products from "../../models/products.js";

async function updateProductsController(request, response) {
  const productId = request.params.id;
  const data = {
    name: request.body.name,
    price: request.body.price,
    brand: request.body.brand,
    stock: request.body.stock,
    description: request.body.description,
    image: request.body.image,
  };

  await Products.update(data, {
    where: {
      id: productId,
    },
  });

  return response.status(201).json(true);
}

export default updateProductsController;
