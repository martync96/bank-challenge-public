import Transaction from "../../src/classes/transaction.js";
import Account from "../../src/classes/account.js";

describe("test one: credit should only be set if the number is a positive integer", () => {
    it("should only be set if setCredit is given a positive integer", () => {
    //arrange
    const testTransaction = new Transaction(1000);
    let input = 10;
    
    //act
    testTransaction.setCredit(input);
    const testResult = testTransaction.getCredit();

    //insert
    expect(testResult).toBe(input);
    });
});

describe("test two: moneyIn should only be set if the number is an integer type", () => {
    it("should only be set if setMoneyIn is given a integer type", () => {
    //arrange
    const testTransaction = new Transaction(1000);
    let input = 10;

    //act
    testTransaction.setCredit(input);
    const testResult = testTransaction.getCredit();

    //insert
    expect(testResult).toBe(input);
    });
});

describe("test three: addTransactions() increases array length by 1", () => {
    it("should increase array length by 1", () => {
    //arrange
    const testAccount = new Account(1000);
    const transactionSpy = jasmine.createSpy("transactionSpy");

    //act
    testAccount.addTransaction(transactionSpy);

    //assert
    expect(testAccount.getTransactions().length).toBe(1);
    });
});

//create additional test to check if get transaction spy is added to array
