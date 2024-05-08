const {factorial} = require("../factorial");

describe("factorial", () => {
    
    // Prueba para número entero
    it("It should return the correct factorial's number", () => {
        expect(factorial(4)).toBe(24);
    });

    // Prueba ingresando cero
    it("Should return 1 when enter 0", () => {
        expect(factorial(1)).toBe(1);
    })

    //Prueba ingresando uno
    it("Should return 1 when enter 1", () => {
        expect(factorial(0)).tobe(1);
    })
    
    // Prueba ingresando un número negativo
    it("It should return the sentence for only positive numbers.", () => {
        expect(factorial(-5).toBe(null));
    })

    // Prueba para un número con decimales
    it("It should return the sentence for only positive numbers.", () => {
        expect(factorial(2.5).toBe(null));
    })
});


