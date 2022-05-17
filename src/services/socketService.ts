export {
    enterMessageRoom,
}

async function enterMessageRoom(req: any, res: any, io: any) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8', 'Transfer-Encoding': 'chunked'});
    res.write("<p>Welcome to the IRC chat room!</p>")

    io.on('connection', (socket: any) => {
        res.write('user has connected \n')

        socket.on('disconnect', () => {
            res.write("<p>A user has disconnected</p>")
        })

        socket.on("message", (arg: any) => {
            res.write("<p>" + arg + "</p>")
        })
    })
}