const { client, nameDB } = require("../utils/mongoConf");
const collectionName = "orders";

function postOrder(req, res) {
  client.connect(err => {
    if (err) throw err;
    const db = client.db(nameDB);
    var data = {
      orderPrice: req.body.orderPrice,
      order: req.body.order
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

function deleteOrder(req, res) {
  const { id } = req.params;
  client.connect(err => {
    if (err) throw err;
    const db = client.db(nameDB);
    db.collection(collectionName).deleteOne(
      {
        id: id
      },
      (err, item) => {
        if (err) throw err;
        if (item.result.n > 0) {
          res.status(200).send({
            status: true,
            message: "Eliminado con exito"
          });
        } else {
          res.status(400).send({
            status: false,
            message: "No se encontro"
          });
        }
      }
    );
  });
}

module.exports = {
  postOrder,
  getOrders,
  deleteOrder
};
