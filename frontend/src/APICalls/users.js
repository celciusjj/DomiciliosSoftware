var url = "http://localhost:4000";

const addUser = body => {
  let jsonAddUser = {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  };
  return fetch(`${url}/signUp`, jsonAddUser);
};

const authUser = body => {
  let jsonAuthUser = {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  };
  return fetch(`${url}/signIn`, jsonAuthUser);
};

module.exports = {
  addUser,
  authUser
};
