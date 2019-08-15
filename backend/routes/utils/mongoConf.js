const MongoClient = require("mongodb").MongoClient;

var url =
  "mongodb+srv://DanielBB:DanielBB@cluster0-qdjmv.mongodb.net/test?retryWrites=true&w=majority";

module.exports = {
  client: MongoClient(url, { useNewUrlParser: true }),
  nameDB: "Domicilio"
};
