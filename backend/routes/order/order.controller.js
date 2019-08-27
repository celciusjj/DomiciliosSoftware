const { client, nameDB } = require("../utils/mongoConf");
const collectionName = "orders";

function postOrder(req, res) {
  client.connect(err => {
    if (err) throw err;
    const db = client.db(nameDB);
    var data = {
      order: [
        {
          orderPrice: req.body.orderPrice,
          order: req.body.order
        }
      ]
    };
    db.collection(collectionName).insertOne(data, (err, value) => {
      if (err) throw err;
      res.status(201).send({ product: value.ops[0] });
    });
  });
}

function getOrders(req, res) {
  client.connect(err => {
    if (err) throw err;
    const db = client.db(nameDB);
    db.collection(collectionName)
      .find()
      .toArray((err, result) => {
        if (err) throw err;
        res.status(200).send({
          status: true,
          data: result,
          message: "Ordenes"
        });
      });
  });
}

module.exports = {
  postOrder,
  getOrders
};
