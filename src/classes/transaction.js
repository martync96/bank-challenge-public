export default class Transaction{
    
    #date;
    #credit;
    #debit;
    #balance;

    constructor(balance)
    {
        this.#balance = balance;
    }
                      
    setDate(day, month, year)
    {
        this.#date = `${day}/${month}/${year}`;
    }

    getDate()
    {
        return this.#date;  
    }
    
    setCredit(paymentIn)
    {
        if((paymentIn <= 0) || !(Number.isInteger(paymentIn)))
        {
            console.log("Please enter a positive integer");
        }else{
            this.#credit = paymentIn;
        }
        
    }

    getCredit()
    {
        return this.#credit;
    }

    setDebit(PaymentOut)
    {
        if((PaymentOut <= 0) || !(Number.isInteger(PaymentOut)))
        {
            console.log("Please enter a positive integer");
        }else{
            this.#debit = PaymentOut;
        }
    }

    updateBalance()
    {
        if((this.#balance - this.#debit) < 0)
        {
            console.log("Insufficient funds");
        }else{
            this.#balance -= this.#debit;
        }
    } //update balance for debits

    getDebit()
    {
        return this.#debit;
    }

    setBalance(credit)
    {
        this.#balance +=  credit;
    }
    getBalance()
    {
        return this.#balance;
    }
}
