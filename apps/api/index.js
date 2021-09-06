const express = require("express");

const config = require("./config");
const routes = require("./src/routes");

const app = express();
const port = 8000;

routes.forEach(route => {
    console.log(route);
    app[route.method](route.path, route.handler);
});

app.get("/", (req, res) => {
    res.status(200).send({
        description: "API Avaiable Routes",
        environment: config.environment,
        routes
    });
});

app.listen(config.port, () => {
    console.log(`${config.environment} server listening on http://${config.url}:${config.port}`);
});