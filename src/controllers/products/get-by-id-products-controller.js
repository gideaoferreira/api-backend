import Products from "../../models/products.js";   

async function getByIdProductsController(request, response) {
    const productId = request.params.id
    const product = await Products.findByPk(productId)

    return response.status(200).json(product)
    
}

export default getByIdProductsController