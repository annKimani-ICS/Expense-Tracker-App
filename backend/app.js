const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

// Middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    
})

const server =() => {
    app.listen(PORT, () => { 
        console.log('listening to port' , PORT)
    })
}

server()