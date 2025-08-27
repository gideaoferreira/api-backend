import express from 'express'
import cors from 'cors'
import sequelize from './src/database/db-connect.js'
import createUserController from './src/controllers/user/create-user-controller.js'
import listUsersController from './src/controllers/user/list-users-controller.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/users', listUsersController)
app.post('/user', createUserController)

app.listen(3000, () => {
    console.log(`App is running`)
})