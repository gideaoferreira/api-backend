import Products from "../../models/products.js";

async function deleteProductsController(request, response) {
  const productsId = request.params.id;
  await Products.destroy({
    where: {
      id: productsId,
    },
  });

  return response.status(200).json(true);
}

export default deleteProductsController;
