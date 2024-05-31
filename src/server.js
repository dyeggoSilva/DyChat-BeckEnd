const {WebSocketServer} = require ("ws")
const dotenv = require ("dotenv")

dotenv.config()

const wss = new WebSocketServer({port: 8080})

wss.on ("connection", (ws)=> {
    ws.on("error", console.error)

    ws.send("mensagem enviada do server")

    ws.on("message", (data)=>{
        
        wss.clients.forEach((client) => client.send(data.toString()))
    })
    console.log("client conected")
})