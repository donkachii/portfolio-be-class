const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/products/:id", (req, res) => {
    const body = req.params.id;
    console.log(body);
})

app.get("/", (req, res) => {
    res.send("Hiiiii");
})

app.listen(PORT, () => console.log(`Running on Port ${PORT}`))
