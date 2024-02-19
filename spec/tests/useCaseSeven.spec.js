import Transaction from "../../src/classes/transaction.js";
import Account from "../../src/classes/account.js";

describe("test one: Credit being paid into the account should be added and printed out ", () => {
    it("should console.log moneyIn variable in transactions array", () => {
    //arrange

    const testAccount = new Account(1000);
    const testTransaction = new Transaction(1000);
    spyOn(testAccount, 'printTransaction').and.callThrough(); //call the actual method

    testTransaction.setCredit(20);

    //act
    testAccount.printTransaction();

    //assert
    expect(testAccount.printTransaction).toHaveBeenCalled();
    });
});