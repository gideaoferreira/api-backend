import Products from "../../models/products.js";   

async function getByIdProductsController(request, response) {
   try{
     const productId = request.params.id
    const product = await Products.findByPk(productId)

    return response.status(200).json(product)
   }catch(error){
     return response.status(500).json(error)
   }
}

export default getByIdProductsController