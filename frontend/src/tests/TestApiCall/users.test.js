import ApiCall from "../../APICalls/users";

describe("Auth user", () => {
  let mockResponse = [
    {
      status: false,
      data: {},
      message: "Usuario encontrado",
      token: "asdfsdfsdfasdfwef"
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

  it("Correct url", () => {
    ApiCall.authUser({ email: "hola", contrasena: "123" })
      .then(res => res.json())
      .then(result => {
        expect(result.status).toEqual(false);
      });
    /*
    expect(
      ApiCall.authUser({ email: "hola", contrasena: "123" })
    ).resolve.toEqual(false);
    */
  });
});
