import Store from "../../models/store.js"


async function createStoreController(request,response) {
   try{
    const storeData = request.body

    const store = await Store.create({
        id: storeData.id,
        category: storeData.category,
        stock: storeData.stock
   })
    return response.status(201).json(store)
   }catch(error){
    return response.status(500).json(error)
   }
    
}
export default createStoreController