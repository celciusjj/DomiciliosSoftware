const { client, nameDB } = require("../utils/mongoConf");
const crypto = require("crypto");
const { createToken } = require("../utils/auth");

const collectionName = "users";

function addUser(req, res) {
  let { name, email, password, address, role } = req.body;

  if (name && email && password && address && role) {
    client.connect(err => {
      if (err) throw err;
      const database = client.db(nameDB);
      database
        .collection(collectionName)
        .findOne({ email: email }, (err, value) => {
          if (err) throw err;
          if (value) {
            res.status(400).send({
              status: false,
              data: [],
              message: `El usuario con email ${email} ya se encuentra registrado`
            });
          } else {
            let data = {
              name,
              email,
              password: crypto.createHmac("sha256", password).digest("hex"),
              addUser,
              role,
              address
            };
            database
              .collection(collectionName)
              .insertOne(data, (err, value) => {
                if (err) throw err;
                delete value.ops[0].password;
                res.status(201).send({
                  status: true,
                  data: value.ops[0],
                  message: `Se registró éxitosamente`
                });
              });
          }
        });
    });
  } else {
    res.status(400).send({
      status: false,
      data: [],
      message: "No se ingresaron todos los campos"
    });
  }
}

function getDeliveries(req, res) {
  console.log("Entra");
  client.connect(err => {
    if (err) throw err;
    const database = client.db(nameDB);
    database
      .collection(collectionName)
      .find({ role: "repartidor" })
      .toArray(function(err, result) {
        if (err) throw err;
        if (result) {
          res.status(200).send({
            status: true,
            data: result,
            message: "Repartidores"
          });
        } else {
          res.status(400).send({
            status: false,
            data: [],
            message: "Error, intenta de nuevo"
          });
        }
      });
  });
}

function authUser(req, res) {
  let { email } = req.body;
  let { password } = req.body;

  if (email && password) {
    client.connect(err => {
      if (err) throw err;
      const database = client.db(nameDB);
      database.collection(collectionName).findOne(
        {
          $and: [
            { email: email },
            { password: crypto.createHmac("sha256", password).digest("hex") }
          ]
        },
        (err, value) => {
          if (err) throw err;
          if (value) {
            let token = createToken({ ...value });
            delete value.password;
            res.status(200).send({
              status: true,
              data: value,
              message: "Usuario encontrado",
              token: token
            });
          } else {
            res.status(404).send({
              status: false,
              data: value,
              message: "Usuario no encontrado"
            });
          }
        }
      );
    });
  } else {
    res.status(400).send({
      status: false,
      data: [],
      message: "No se ingresaron todos los campos"
    });
  }
}

module.exports = {
  addUser,
  authUser,
  getDeliveries
};
