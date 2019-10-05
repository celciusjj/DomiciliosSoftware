const { client, nameDB } = require("../utils/mongoConf");
const collectionName = "orders";

/**
 * Adds a new order given the body by the
 * request.
 * @param {Request} req
 * @param {Response} res
 */
function postOrder(req, res) {
  let { orderPrice, order } = req.body;

  if (orderPrice && order) {
    client.connect(err => {
      if (err) throw err;
      const db = client.db(nameDB);
      db.collection(collectionName)
        .find()
        .toArray((err, value) => {
          if (err) throw err;
          let data;
          if (value.length > 0) {
            data = {
              orderId: value[value.length - 1].orderId + 1,
              orderPrice: orderPrice,
              order: order
            };
          } else {
            data = {
              orderId: 1,
              orderPrice: orderPrice,
              order: order
            };
          }

          db.collection(collectionName).insertOne(data, (err, value) => {
            if (err) throw err;
            res.status(201).send({
              product: value.ops[0],
              message: "Prodcutos devueltos con exito"
            });
          });
        });
    });
  } else {
    res.status(400).send({ product: [], message: "Campos incompletos" });
  }
}

/**
 * Get all the orders from the database
 * @param {Request} req
 * @param {Response} res
 */
function getOrders(req, res) {
  client.connect(err => {
    if (err) throw err;
    const db = client.db(nameDB);
    db.collection(collectionName)
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        if (result) {
          res.status(200).send({
            status: true,
            data: result,
            message: "Ordenes"
          });
        } else {
          res.status(400).send({
            status: false,
            data: [],
            message: "Error"
          });
        }
      });
  });
}

/**
 * Delete an element from the database given an id by params
 * @param {Request} req
 * @param {Response} res
 */
function deleteOrder(req, res) {
  const { id } = req.params;
  client.connect(err => {
    if (err) throw err;
    const db = client.db(nameDB);
    db.collection(collectionName).deleteOne(
      {
        orderId: parseInt(id)
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
