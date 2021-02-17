describe('Test fetch URL for localhost' , () => {
    test('It should return true', () => {
        const input = "http://localhost:8080/analyze";

        const output = "http://localhost:8080/analyze";

        expect(input).toEqual(output);
    });
});