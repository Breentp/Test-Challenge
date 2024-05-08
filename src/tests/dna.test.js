const { validDNA } = require('../dna');

describre("dnaString", () => {

    // Prueba para una cadena de solo mayúsculas y letras CTAG
    it("Should return true", () => {
        expect(validDNA(CTAAGCT)).toBe("is Valid");
    });

    //Prueba para una cadena de mayúsculas y letras CTAG
    it("Should return false", () => {
        expect(validDNA(TTCWCA)).toBe(false);
    });


    //Prueba para una cadena de minúsculas y letras ctagit("Should return true", () => {
    it("Should return false", () => {
        expect(validDNA(aagtcgg)).toBe(false);
    });

    //Prueba para una cadena vacía
    it("Should return false", () => {
        expect(validDNA()).toBe(false);
    });
});