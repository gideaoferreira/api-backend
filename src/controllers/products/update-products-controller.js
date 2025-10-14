import Products from "../../models/products.js";

async function updateProductsController(request, response) {
  try {
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
  } catch (error) {
    return response.status(500).json(error);
  }

  return response
    .status(200)
    .json({ message: "Produto atualizado com sucesso" });
}
export default updateProductsController;
