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

server.listen(3000, () => console.log('listening on port 3000'))




