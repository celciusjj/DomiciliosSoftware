const { client, nameDB } = require("../utils/mongoConf");
const collectionName = "products";

function retrieveProducts(req, res) {
  client.connect(err => {
    if (err) throw err;
    const db = client.db(nameDB);
    db.collection(collectionName)
      .find()
      .toArray((err, result) => {
        if (err) throw err;
        client.close();
        res.status(200).send(result);
      });
  });
}

function getOneProduct(req, res) {
  let { productId } = req.params;
  if (productId) {
    client.connect(err => {
      if (err) throw err;
      client.close();
      const dataBase = client.db(nameDB);
      dataBase
        .collection(collectionName)
        .findOne({ productId: productId }, (err, value) => {
          if (err) throw err;
          if (value) {
            res.status(200).send({
              status: true,
              product: value,
              message: "El producto se encontró"
            });
          } else {
            res.status(400).send({
              status: false,
              product: [],
              message: "El producto no se encuentra"
            });
          }
        });
    });
  } else {
    res.status(400).send({
      status: false,
      product: [],
      message: "Campos incompletos"
    });
  }
}

function postProduct(req, res) {
  let { name, price, quantity, description, availability, url } = req.body;
  if (name && price && quantity && description && url) {
    client.connect(err => {
      if (err) throw err;
      const db = client.db(nameDB);

      db.collection(collectionName)
        .find({})
        .toArray((err, items) => {
          client.close();
          if (err) throw err;
          let data;
          if (items.length > 0) {
            data = {
              productId: (
                parseInt(items[items.length - 1].productId) + 1
              ).toString(),
              name,
              price,
              quantity,
              description,
              availability,
              url
            };
          } else {
            data = {
              productId: 1,
              name,
              price,
              quantity,
              description,
              availability,
              url
            };
          }
          db.collection(collectionName).insertOne(data, (err, value) => {
            if (err) throw err;
            client.close();
            if (value.ops[0]) {
              res.status(201).send({
                status: true,
                product: value.ops[0],
                message: "Elemento agregado éxitosamente"
              });
            } else {
              res.status(400).send({
                status: false,
                product: [],
                message: "No se agrego el elemento"
              });
            }
          });
        });
    });
  } else {
    res.status(400).send({
      status: false,
      product: [],
      message: "Campos incompletos"
    });
  }
}

function editProduct(req, res) {
  let { productId } = req.params;
  if (productId) {
    client.connect(err => {
      if (err) throw err;
      client.close();
      const dataBase = client.db(nameDB);
      dataBase.collection(collectionName).updateOne(
        { productId: productId },
        {
          $set: {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            description: req.body.description,
            availability: req.body.availability,
            url: req.body.url
          }
        },
        (err, item) => {
          if (err) throw err;
          if (item.result.n > 0) {
            res.status(200).send({
              status: true,
              message: "Se editó correctamente"
            });
          } else {
            res.status(400).send({
              status: false,
              message: "No se encontró el producto"
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

function deleteProduct(req, res) {
  let { productId } = req.params;
  if (productId) {
    client.connect(err => {
      if (err) throw err;
      client.close();
      const dataBase = client.db(nameDB);
      dataBase
        .collection(collectionName)
        .deleteOne({ productId: productId }, (err, item) => {
          if (err) throw err;
          if (item.result.n > 0) {
            res.status(200).send({
              status: true,
              message: "Eliminado con éxito"
            });
          } else {
            res.status(400).send({
              status: false,
              message: "No se encontró el producto"
            });
          }
        });
    });
  } else {
    res.status(400).send({
      status: false,
      message: "Campos incompletos"
    });
  }
}

module.exports = {
  retrieveProducts,
  postProduct,
  editProduct,
  deleteProduct,
  getOneProduct
};
