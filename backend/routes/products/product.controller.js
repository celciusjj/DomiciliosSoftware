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
        res.status(200).send(result);
      });
  });
}

function postProduct(req, res) {
  let {
    productId,
    name,
    price,
    quantity,
    description,
    availability,
    url
  } = req.body;
  if (
    productId &&
    name &&
    price &&
    quantity &&
    description &&
    url
  ) {
    client.connect(err => {
      if (err) throw err;
      const db = client.db(nameDB);
      db.collection(collectionName).findOne(
        { productId: productId },
        (err, product) => {
          if (err) throw err;
          if (product) {
            res.status(201).send({
              status: false,
              product: [],
              message: "El elemento ya se encuentra agregado"
            });
          } else {
            var data = {
              productId,
              name,
              price,
              quantity,
              description,
              availability,
              url
            };
            db.collection(collectionName).insertOne(data, (err, value) => {
              if (err) throw err;
              res.status(201).send({
                status: true,
                product: value.ops[0],
                message: "Elemento agregado éxitosamente"
              });
            });
          }
        }
      );
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
  deleteProduct
};
