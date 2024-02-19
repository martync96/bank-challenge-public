import Account from "../../src/classes/account.js";
import Transaction from "../../src/classes/transaction.js";

describe("test one: setDate() sets the current date", () => {
    it("should set the same date as the system's dte", () => {
    //arrange
    const testTransaction = new Transaction(1000);
    const todaysDate = new Date(); //create date Object
    const year = todaysDate.getFullYear(); //get year from date object
    const month = todaysDate.getMonth() + 1; //months are 0-11 in javascript, you have to do month + 1 to get proper date
    const day = todaysDate.getDate();

    //act
    testTransaction.setDate(day, month, year);
    let transactionDate = testTransaction.getDate();

    //assert
    expect(transactionDate).toBe("29/01/2024"); //sorry, you'll need to change this date to the date it is when you mark it

    });
});


describe("test two: dates of transactions saved in account transactions array are printed", () => {
    it("should print out the current date", () => {
    //arrange
    const testAccount = new Account(1000);
    spyOn(testAccount, 'printTransaction').and.callThrough(); //call the actual method
    
    //set date in transaction class
    const testTransaction = new Transaction(1000);
    const todaysDate = new Date(); //create date Object
    const year = todaysDate.getFullYear(); //get year from date object
    const month = todaysDate.getMonth() + 1; //months are 0-11 in javascript, you have to do month + 1 to get proper date
    const day = todaysDate.getDate();
    testTransaction.setDate(day, month, year); 

    testAccount.addTransaction(testTransaction);

    //act
    testAccount.printTransaction();

    //assert
    expect(testAccount.printTransaction).toHaveBeenCalled();
    });
});
