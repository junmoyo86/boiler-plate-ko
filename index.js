const express = require('express')
const app = express()
const port = 5000

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://junmoyo:dlwnsah0@boilerplate.4hnfjfw.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => console.log("connected OK!!!")).catch(check);

function check(error){
    console.log(error);
}

app.get('/', (req, res) => {
    res.send(' My First Node JS Project and Welcome to you!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})