import Transaction from "../../src/classes/transaction.js";

describe("test one: balance should only be updated if debit <= balance", () => {
    it("should only update if debit <= balance", () => {
    //arrange
    const testTransaction = new Transaction(1000);
    //act
    testTransaction.setDebit(10000);
    let moneyOut = testTransaction.getDebit();
    testTransaction.updateBalance(moneyOut);

    //assert
    expect(testTransaction.getBalance()).toBe(1000);
    });
});