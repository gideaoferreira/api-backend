import Store from "../../models/store.js";

async function listStoreController(request, response) {
    try{
        const store = await Store.findAll();
        return response.status(200).json(store);
    }catch (error) {
        return response.status(500).json(error)
    }
}

export default listStoreController