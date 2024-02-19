import OverdraftAccount from "../../src/classes/overdraftAccount.js";

describe("test one: getDebitLimit should return true if is debit is less than balance + overdraftLimit", () => {
    it("should return false if (balance + overdraftLimit) - debit < 0", () => {
    //arrange
    const overdraftAccount = new OverdraftAccount(0, 1000);
    let debit = 2000;

    //act
    overdraftAccount.getDebitLimit(2000);

    //assert
    expect(overdraftAccount.getDebitLimit(debit)).toBe(false);

    });
});