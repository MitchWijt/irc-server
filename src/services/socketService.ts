export {
    enterMessageRoom,
}

async function enterMessageRoom(req: any, res: any, io: any) {
    req.setTimeout(0)

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8', 'Transfer-Encoding': 'chunked'});
    res.write("<p>Welcome to the IRC chat roomSSSSSS!</p>")

    io.on('connection', (socket: any) => {
        socket.on("message", (arg: any, callback: any) => {
            res.write("<p>" + arg + "</p>")
            callback(null, 'event emitted')
        })
    })
}