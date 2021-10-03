const health = require("./health");

const routes = [];

health.forEach(route => routes.push(route));

module.exports = routes;