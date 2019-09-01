const { client, nameDB } = require("../utils/mongoConf");
const collectionName = "products";

retrieveProducts = (req, res) => {
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
};

postProduct = (req, res) => {
  client.connect(err => {
    if (err) throw err;
    const db = client.db(nameDB);
    var data = {
      productId: req.body.productId,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
      availability: req.body.vailability,
      url: req.body.url
    };
    db.collection(collectionName).insertOne(data, (err, value) => {
      if (err) throw err;
      res.status(201).send({ product: value.ops[0] });
    });
  });
};

module.exports = {
  retrieveProducts,
  postProduct
};
