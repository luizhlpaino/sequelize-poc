const express = require("express");
const routes = require("./src/routes");

const app = express();
const port = 8000;

routes.forEach(route => {
    console.log(route);
    app[route.method](route.path, route.handler);
});

app.get("/", (req, res) => {
    res.status(200).send({
        description: "Avaiable Routes",
        routes
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});