import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', function (request, response) {
    return response.json('Teste')
})

app.listen(3000, () => {
    console.log(`App is running`)
})