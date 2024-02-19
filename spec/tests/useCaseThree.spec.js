import Transaction from "../../src/classes/transaction.js";

describe("test one: debit should only be set if the number is a positive integer", () => {
    it("should only be set if setDebit is given a positive integer", () => {
    //arrange
    const testTransaction = new Transaction(1000);
    let input = 10;
    
    //act
    testTransaction.setDebit(input);
    const testResult = testTransaction.getDebit();

    //insert
    expect(testResult).toBe(input);
    });
});

describe("test two: debit should only be set if the number is an integer type", () => {
    it("should only be set if setDebit is given a integer type", () => {
    //arrange
    const testTransaction1 = new Transaction(1000);
    let input = 10;

    //act
    testTransaction1.setDebit(input);
    const testResult = testTransaction1.getDebit();

    //insert
    expect(testResult).toBe(input);
    });
});