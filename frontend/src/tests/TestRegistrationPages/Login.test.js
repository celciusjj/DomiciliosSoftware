import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LogIn from "../../components/RegistrationPages/Login";
import ApiCall from "../../APICalls/users";

Enzyme.configure({ adapter: new Adapter() });

it("When both inputs are empty", () => {
  const logInComponent = shallow(<LogIn />);
  logInComponent.find("#buttonLogIn").simulate("click");
  expect(logInComponent.state("error")).toEqual("Ingresa todos los campos");
});

it("Renders without crashing", () => {
  const logInComponent = shallow(<LogIn />);
  expect(logInComponent.length).toBe(1);
});
/*
it("Wrong credentials", () => {
  const logInComponent = mount(<LogIn />);
  const userNameInput = logInComponent.find("input").at(0);
  const passwordInput = logInComponent.find("input").at(1);
  //For userName
  userNameInput.instance().value = "DanielBB";
  userNameInput.simulate("change");
  //For password
  passwordInput.instance().value = "12345";
  passwordInput.simulate("change");

  ApiCall.authUser({
    email: logInComponent.state().email,
    password: logInComponent.state().contrasena
  })
    .then(res => res.json())
    .then(res => {
      expect(res.status).toEqual(true);
    });
});
*/
