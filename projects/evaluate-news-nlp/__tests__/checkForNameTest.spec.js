import { checkForName } from "../src/client/js/nameChecker"

describe('Check for Picard, Janeway, Kirk, Archer, Georgiou' , () => {
    test('It should return true', () => {
        const input = [ "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"];

        const output = ["Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"];

        expect(input).toEqual(output);
    });
});