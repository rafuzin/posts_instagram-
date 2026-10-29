import express from 'express'
import {PostsRouter} from "./routes/Posts.routes.js";

const server = express()

server.use(express.json())

server.get('/health', (req, res) => {
    res.json({
        status: 'Tá fucionando meu parceiro'
    })
})

server.use('/Posts', PostsRouter)

server.listen(3000, () => {
    console.log('ta rodando pae, lá no http://localhost:3000')
})