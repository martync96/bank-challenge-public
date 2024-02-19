import Transaction from "../../src/classes/transaction.js";
import Account from "../../src/classes/account.js";

describe("test two: balance of transactions saved in account transactions are printed", () => {
    it("should print the balance of all transaction objects saved in array", () => {
    //arrange
    const testAccount = new Account(1000);
    const testTransaction = new Transaction(1000);
    spyOn(testAccount, 'printTransaction').and.callThrough(); //call the actual method

    //act
    testAccount.addTransaction(testTransaction);
    testAccount.printTransaction();

    //assert
    expect(testAccount.printTransaction).toHaveBeenCalled();
    });
});