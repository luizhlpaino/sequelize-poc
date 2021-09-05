const getHealth = (req, res) => {
    res.status(200).send({ success: true });
};

module.exports = [
    {
        path: "/v1/health",
        method: "get",
        handler: getHealth
    }
];