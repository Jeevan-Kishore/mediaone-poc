/*module.exports = async (req, res) => {
    const { path = '/' } = req.query;
    const response = await (await fetch(`https://www.mediaonetv.in/route-data.json?path=${path}`)).json();
    await res.json({
        body: response
    })
};*/
module.exports = (req, res) => {
    const { name = 'World' } = req.query
    res.status(200).send(`Hello ${name}!`)
}
