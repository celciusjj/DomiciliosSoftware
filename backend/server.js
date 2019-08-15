const app = require("./app");

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
