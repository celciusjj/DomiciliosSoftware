const userRoutes = require("./routes/users");
const productRoutes = require('./routes/products');

module.exports = app => {
  app.use(userRoutes);
  app.use(productRoutes);
};
