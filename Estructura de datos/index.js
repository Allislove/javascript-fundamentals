const express = require("express")
const app = express()
const port = 1900;
const ordernarNumeros = require("./ordenadorDeBurbujas")





app.get("/", (req, res) => {
    res.send("Hello World")

})

app.get("/ordenamientoBurguja", (req, res) => {
    console.log(req.body);
    res.send(ordernarNumeros)
})

app.listen(port, () => {
    console.log("Servidor escuchado en:", port);
})

