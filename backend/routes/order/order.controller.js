const { client, nameDB } = require("../utils/mongoConf");
const collectionName = "orders";

/**
 * Adds a new order given the body by the
 * request.
 * @param {Request} req
 * @param {Response} res
 */
function addOrder(req, res) {
  let { orderPrice, order, clientData, lat, lng, address } = req.body;

  if (orderPrice && order && clientData && lat && lng && address) {
    client.connect(err => {
      if (err) throw err;
      const db = client.db(nameDB);

      db.collection(collectionName)
        .find()
        .toArray((err, value) => {
          if (err) throw err;
          client.close();
          let data;
          if (value.length > 0) {
            data = {
              orderId: value[value.length - 1].orderId + 1,
              orderPrice: orderPrice,
              order: order,
              client: clientData,
              state: "pendiente",
              lat,
              lng,
              address
            };
          } else {
            data = {
              orderId: 1,
              orderPrice: orderPrice,
              order: order,
              client: clientData,
              state: "pendiente",
              lat,
              lng,
              address
            };
          }
          db.collection(collectionName).insertOne(data, (err, value) => {
            if (err) throw err;
            if (value.ops[0]) {
              res.status(201).send({
                product: data,
                message: "Productos devueltos con exito"
              });
            } else {
              res.status(400).send({
                product: [],
                message: "Error"
              });
            }
          });
        });
    });
  } else {
    res.status(404).send({ product: [], message: "Campos incompletos" });
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
        client.close();
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
        client.close();
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

function getOrdersByUser(req, res) {
  let { userId } = req.params;
  if (userId) {
    client.connect(err => {
      if (err) throw err;
      client.close();
      const dataBase = client.db(nameDB);
      dataBase
        .collection(collectionName)
        .aggregate([
          {
            $match: { "client.email": userId }
          }
        ])
        .toArray((err, result) => {
          if (err) throw err;
          if (result) {
            res.status(200).send({
              status: true,
              data: result,
              message: "Ordenes del usuario"
            });
          } else {
            res.status(400).send({
              status: false,
              data: [],
              message: "Error al recuperar ordenes"
            });
          }
        });
    });
  } else {
    res.status(400).send({
      status: false,
      data: [],
      message: "No se encontro"
    });
  }
}

function updateOrderState(req, res) {
  let { orderId } = req.params;
  let { newState, deliver } = req.body;
  if (orderId && newState && deliver) {
    client.connect(err => {
      if (err) throw err;
      client.close();
      const dataBase = client.db(nameDB);
      dataBase
        .collection(collectionName)
        .updateOne(
          { orderId: parseInt(orderId) },
          { $set: { state: newState, deliver: deliver } },
          (err, value) => {
            if (err) throw err;
            if (value.result.n > 0) {
              res.status(200).send({
                status: true,
                message: "Actualizado"
              });
            } else {
              res.status(400).send({
                status: false,
                message: "No se encontro la orden"
              });
            }
          }
        );
    });
  } else {
    res.status(400).send({
      status: false,
      message: "Campos incompletos"
    });
  }
}

function getOrdersDelivered(req, res) {
  client.connect(err => {
    if (err) throw err;
    const dataBase = client.db(nameDB);
    dataBase
      .collection(collectionName)
      .find({ state: "entregado" })
      .toArray((err, result) => {
        if (err) throw err;
        client.close();
        if (result) {
          res.status(200).send({
            status: true,
            data: result,
            message: "Elemento entregados"
          });
        } else {
          res.status(400).send({
            status: false,
            data: [],
            message: "No se encontraron registros"
          });
        }
      });
  });
}

function getOrdersByState(req, res) {
  client.connect(err => {
    if (err) throw err;
    const dataBase = client.db(nameDB);
    dataBase
      .collection(collectionName)
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        if (result) {
          res.status(200).send({
            status: false,
            data: [
              {
                pendiente: result.filter(e => e.state === "pendiente")
              },
              {
                despachado: result.filter(e => e.state === "despachado")
              },
              {
                entregado: result.filter(e => e.state === "entregado")
              }
            ],
            message: "No se encontraron registros"
          });
        } else {
          res.status(404).send({
            status: false,
            data: [],
            message: "No se encontraron registros"
          });
        }
      });
  });
}

module.exports = {
  addOrder,
  getOrders,
  deleteOrder,
  getOrdersByUser,
  updateOrderState,
  getOrdersDelivered,
  getOrdersByState
};
