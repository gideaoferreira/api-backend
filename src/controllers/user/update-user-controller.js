import User from "../../models/user.js";

async function updateUserController(request, response) {
    const userId = request.params.id
    const userData = request.body

    await User.update(
        {
            name: userData.name,
            surname: userData.surname,
            birthdate: userData.birthdate,
            cpf: userData.cpf,
            email: userData.email,
            password: userData.password
        },
        {
            where: {
                id: userId
            }
        }
    )

    return response.status(201).json({
        message: 'Usário atualizado com sucesso!'
    })
}

export default updateUserController