import account from "../../src/classes/account.js";

describe("Test case one: account class gets made", () => {
    it("should make an instance of account class", () => {
        //arrange
        const testAccount = new account();

        //assert
        expect(testAccount).toBeDefined();
    });
});