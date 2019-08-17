const userRoutes = require("./routes/users");
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/order');

module.exports = app => {
  app.use(userRoutes);
  app.use(productRoutes);
  app.use(orderRoutes);
};
