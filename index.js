const express = require('express');


const { connectToMongoDB } = require("./connect")

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/nodejs-short-url").then( ()=>
console.log("Mongo DB connected!"))

app.get("/", (req, res) => {
   return res.send("Hello from Page!")
})


app.listen(PORT, () => console.log(` Server Started at PORT: ${PORT}`));