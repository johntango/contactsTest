const contacts = require("./contacts");
describe("My contacts", () => {
  test("length", () => {
    expect(contacts.contacts().length).toEqual(3);
  });
  test("object contains", () => {
    expect(contacts.contacts()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "fred",
        }),
      ])
    );
  });
});
