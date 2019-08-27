import React from "react";
import Header from "./components/Header";
import Registro from "./components/RegistrationPages/Registro";
import Login from "./components/RegistrationPages/Login";
import Carrito from "./components/ShopCar/ShopCartProducts";
import OrderUser from "./components/order/orderUserPage";
//router

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import Productos from "./components/mainPage/Productos";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {console.log("cargo primero")}
        <Router>
          <React.Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/login/" component={Login} />
                <Route exact path="/" component={Productos} />
                <Route exact path="/registro/" component={Registro} />
                <Route exact path="/carrito/" component={Carrito} />
                <Route exact path="/orderUser/" component={OrderUser} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
