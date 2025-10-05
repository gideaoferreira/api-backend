import Store from "../../models/store.js";

async function updateStoreController(request, response) {
    try{
        const storeId = request.params.id;
        const data = {
        name: request.category,
        category: request.category,
        stock: request.stock
        }
        await Store.update (data, {
            where:{
                id: storeId,
            },
        })
       }catch(error){
        return response.status(500).json(error)
       }
    }    
export default updateStoreController