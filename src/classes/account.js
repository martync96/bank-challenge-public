export default class Account{
   
    #id
    #username
    #transactions
    #balance 

    constructor(id, username, balance)
    {
        this.#id = id;
        this.#username = username;
        this.#transactions = [];
        this.#balance = balance;
    }

    setId(id)
    {
        this.#id = id;
    }

    getId()
    {
        return this.#id;
    }

    setUsername(username)
    {
        this.#username = username;
    }

    getUsername()
    {
        return this.#username;  
    }
    
    addTransaction(transaction)
    {
        this.#transactions.push(transaction)
    }

    getTransactions()
    {
        return this.#transactions;
    }

    setBalance(balance)
    {
        this.#balance = balance;
    }
    
    getBalance()
    {
        return this.#balance;
    }

    printTransaction()
    {
        //declare headers for table, use padEnd() to add white space after each header
        let tableDate = "date";
        tableDate = tableDate.padEnd(11); 
        let tableCredit = "credit";
        tableCredit = tableCredit.padEnd(8);
        let tableDebit = "debit";
        tableDebit = tableDebit.padEnd(8); 
        let tableBalance = "balance";
        tableBalance = tableBalance.padEnd(7);

        console.log(tableDate + "|| " + tableCredit + "|| " + tableDebit + "|| " + tableBalance);
        this.#transactions.reverse().forEach(transaction => { // loop through the array backwards using .reverse(), so recent transactions appear at top
            console.log(
                `${transaction.getDate() || ' '} || ` +
                `${(transaction.getCredit() !== undefined ? String(transaction.getCredit()+".00") : ' ').padEnd(7)} || ` + //String() converts the number to a string, padEnd() then adds white space after number
                `${(transaction.getDebit() !== undefined ? String(transaction.getDebit()+".00") : ' ').padEnd(7)} || ` +
                `${transaction.getBalance() || ' '}`
              );
        }); // this works fine for passing criteria, might need to be more dynamic for none hardcoded date.
    }
}