import TransactionFileHelper from "./classes/transactionFileHelper.js";
import Account from "./classes/account.js";
import Transaction from "./classes/transaction.js";

//declare account and transaction 1, initialise balance to 0, initialise transaction 1 with balance of account
const account = new Account(1, "Italialeu", 0);
const transaction1 = new Transaction(account.getBalance());

transaction1.setCredit(1000); //set credit to 1000
transaction1.setDate("10", "01", "2012"); //set date to 10/01/2012
transaction1.setBalance(transaction1.getCredit()); //set balance to balance + credit
account.addTransaction(transaction1); //add transaction to account's transaction array
account.setBalance(transaction1.getBalance());  //set account balance to transaction balance

//declare transaction 2, initialise with updated balance of account
const transaction2 = new Transaction(account.getBalance()); 
transaction2.setCredit(2000); //set credit to 2000
transaction2.setDate("13", "01", "2012"); //set date to 13/01/2012
transaction2.setBalance(transaction2.getCredit()); //set balance to balance + credit

account.addTransaction(transaction2); //add transaction2 to account's transaction
account.setBalance(transaction2.getBalance());

//declare transaction 3
const transaction3 = new Transaction(account.getBalance());
transaction3.setDebit(500); //set debit to 500
transaction3.setDate("14", "01", "2012"); //set date to 14/01/2012
transaction3.updateBalance(transaction3.getDebit()); //update balance by subtracting debit from balance

account.addTransaction(transaction3); //add transaction3 to account's transaction array

account.printTransaction();
