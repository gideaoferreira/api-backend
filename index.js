import express from 'express'
import cors from 'cors'
import sequelize from './src/database/db-connect.js'
import User from './src/models/user.js'
import createUserController from './src/controllers/user/create-user-controller.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', async function (request, response) {
    const users = await User.findAll()
    return response.json(users)
})

app.post('/user', createUserController)

app.listen(3000, () => {
    console.log(`App is running`)
})