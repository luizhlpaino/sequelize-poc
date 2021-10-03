const sequelize = require("../../config/sqlclient");

const getHealth = async (req, res) => {
    console.log(`dbname: ${process.env.DB_NAME}`)
    console.log(`username: ${process.env.DB_USERNAME}`)
    console.log(`password: ${process.env.DB_PASSWORD}`)

    res.status(200).send({ success: true });
};

module.exports = [
    {
        path: "/v1/health",
        method: "get",
        handler: getHealth
    }
];