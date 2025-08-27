import { Sequelize } from "sequelize";

const sequelize = new Sequelize('api-db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

async function dbConnection() {
    try {
        await sequelize.authenticate()
        console.info('Banco de dados conectado com sucesso!')
    } catch (error) {
        console.error(`Erro ao tentar conectar ao banco de dados: ${error}`)
    }
}

dbConnection()

export default sequelize