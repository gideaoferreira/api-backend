import Products from "../../models/products.js";

async function deleteProductsController(request, response) {
  try{
    const productsId = request.params.id;
  await Products.destroy({
    where: {
      id: productsId,
    },
  });
  return response.status(200).json(true);
  }catch(error){
    return response.status(500).jason(error)
  }
}

export default deleteProductsController;
