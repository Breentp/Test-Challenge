const users = require("./data").default;
const { getUsers, getUser } = require("../users");

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// Prueba para usuario encontrado
describre("getUser", () => {
    it("Should find the correct user by id", async () => {
        const user = await getUser(3);
        expect(user.id).toEqual(user);
    });
});

//Prueba para usuario no encontrado
describre("getUser", () => {
    it("Should return the id is unavalible", async () => {
        const user = await getUser(5);
        expect(user.id).toBeUndefined();
    });
});


