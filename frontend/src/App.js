import React from "react";
import Header from "./components/Header";
import Registro from "./components/RegistrationPages/Registro";
import Login from "./components/RegistrationPages/Login";
//router

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import Productos from "./components/Productos";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/login/" component={Login} />
              <Route exact path="/" component={Productos} />
              <Route exact path="/registro/" component={Registro} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
