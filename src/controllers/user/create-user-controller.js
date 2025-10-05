import User from "../../models/user.js";

async function createUserController(request, response) {
    try{
        const userData = request.body

    const user = await User.create({
        name: userData.name,
        surname: userData.surname,
        birthdate: userData.birthdate,
        cpf: userData.cpf,
        email: userData.email,
        password: userData.password
    })

    return response.status(201).json(user)
    } catch(error){
        return response.status(500).json(error)

    }
}

export default createUserController