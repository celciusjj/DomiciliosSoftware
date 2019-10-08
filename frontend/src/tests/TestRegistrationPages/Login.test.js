import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LogIn from "../../components/RegistrationPages/Login";
import ApiCall from "../../APICalls/users";

Enzyme.configure({ adapter: new Adapter() });

let mockResponse = [
  {
    status: true,
    data: {
      name: "juan jose",
      email: "juanjjo99@hotmail.es",
      password: "12345",
      role: "repartidor"
    },
    message: "Usuario encontrado",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDgyYmZiN2JlOGRkNzNjOGNlNmE2NzUiLCJuYW1lIjoiRGFuaWVsIiwiZW1haWwiOiJiYWFhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYjMzZmU5YWEwODQyODg3MWRiM2E5M2Q2YWIwNWU3NjA3YzExNzhjMmQxOWUyYTRkYmFhODQ3OWE4MWI0ZWM4ZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU3MDQxMDQyMywiZXhwIjoxNTcwNDk2ODIzfQ.-H-hMTe2wFTo8iQIUcRt-DYVaHRZS2hL53VEoLUEqrM"
  }
];
beforeEach(() => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    });
  });
});

it("When both inputs are empty", () => {
  const logInComponent = shallow(<LogIn />);
  logInComponent.find("#buttonLogIn").simulate("click");
  expect(logInComponent.state("error")).toBe("ingresa todos los campos");
});

it("Renders without crashing", () => {
  const logInComponent = shallow(<LogIn />);
  expect(logInComponent).toMatchSnapshot();
});

it("Wrong credentials", () => {
  const logInComponent = mount(<LogIn />);
  const userNameInput = logInComponent.find("input").at(0);
  const passwordInput = logInComponent.find("input").at(1);
  //For userName
  userNameInput.instance().value = "DanielBB";
  //userNameInput.simulate("change");
  passwordInput.instance().value = "12345";

  ApiCall.authUser({
    email: logInComponent.state().email,
    password: logInComponent.state().contrasena
  })
    .then(res => res.json())
    .then(res => {
      expect(res.status).toEqual(true);
    });
});
