import express from "express"
import cors from "cors"
import { Server as HttpServer } from "http"
import { Server as SocketServer } from 'socket.io'

import { enterMessageRoom } from "./services/socketService"

const app = express()
const server = new HttpServer(app)
const io = new SocketServer(server)

app.use(cors())
app.get('/', (req: any, res: any) => enterMessageRoom(req, res, io))

// this is supposed to be the client side (event bus) sending a message
import { io as clientIo } from 'socket.io-client'
app.get('/send-message', (req, res) => {
    const socketClient = clientIo("http://165.232.89.237:3000/")
    socketClient.emit("message", "this is a new message")

    setTimeout(() => {
        socketClient.disconnect()
    }, 2000)

    res.json("message sent")
})

server.listen(3000, () => console.log('listening on port 3000'))




