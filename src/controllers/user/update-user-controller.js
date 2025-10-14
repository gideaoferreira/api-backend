import User from "../../models/user.js";

async function updateUserController(request, response) {
  try {
    const userId = request.params.id;
    const userData = request.body;

    await User.update(
      {
        name: userData.name,
        surname: userData.surname,
        birthdate: userData.birthdate,
        cpf: userData.cpf,
        email: userData.email,
        password: userData.password,
        status: userData.status,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return response.status(201).json({
      message: "Usário atualizado com sucesso!",
    });
  } catch (error) {
    return response.status(500).json(error);
  }
}

export default updateUserController;
