export {
    enterMessageRoom,
}

async function enterMessageRoom(req: any, res: any, io: any) {
    req.setTimeout(0)

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8', 'Transfer-Encoding': 'chunked'});
    res.write("<p>Welcome to the IRC chat room!</p>")

    io.on('connection', (socket: any) => {
        socket.on("message", (arg: any, callback: any) => {
            const data = JSON.parse(arg)
            res.write(`<p><span style="color: darkblue">${data.name}: </span>${data.message}</p>`)
            callback(null, 'event emitted')
        })
    })
}