const { client, nameDB } = require("../utils/mongoConf");
const collectionName = "orders";

postOrder = (req, res) => {
    client.connect(err => {
        if (err) throw err;
        const db = client.db(nameDB);
        var data =
        {
            order:[{
                name: req.body.order,

            }]

        }
        db.collection(collectionName).insertOne(data, (err, value) => {
            if(err) throw err;
            res.status(201).send({ product: value.ops[0]});
        });

    });

}

module.exports = {
    postOrder
}