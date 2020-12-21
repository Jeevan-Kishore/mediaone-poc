const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { path = '/' } = req.query;
    const response = await fetch(`https://www.mediaonetv.in/route-data.json?path=${path}`);
    await res.json({
        body: response
    })
};
