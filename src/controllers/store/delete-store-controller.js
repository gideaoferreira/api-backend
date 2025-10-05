import Store from "../../models/store.js";

async function deleteStoreController(request, response) {
    try{
        const storeId = request.params.id;
        await Store.destroy({
            where: {
                id:storeId,
            },
        })
        return response.status(200).json(true)
    }catch(error){{
        return response.status(500).json(error)
    }}   
}

export default deleteStoreController