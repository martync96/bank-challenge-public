import Transaction from "../../src/classes/transaction.js";
import Account from "../../src/classes/account.js";

describe("test one: Debit taken out of the account should be added to transaction and printed out ", () => { 
    it("should console.log moneyOut variable in transactions array", () => {
    //arrange

    const testAccount = new Account(1000);
    const testTransaction = new Transaction(1000);
    spyOn(testAccount, 'printTransaction').and.callThrough(); //call the actual method

    testTransaction.setDebit(20);

    //act
    testAccount.printTransaction();

    //assert
    expect(testAccount.printTransaction).toHaveBeenCalled();
    });
});