const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes/user.routes');
const logger = require('./middleware/logger');

app.use(express.json());

app.use(logger)

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Hiiiii");
})

app.listen(PORT, () => console.log(`Running on Port ${PORT}`))
