import Account from "./account.js";

export default class OverdraftAccount extends Account
{
    #overdraftLimit;

    constructor(balance, overdraftLimit)
    {
        super(balance);
        this.#overdraftLimit = overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit)
    {
        this.#overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit()
    {
        return this.#overdraftLimit;
    }

    getDebitLimit(debit)
    {
        return (this.#overdraftLimit + this.balance) - debit >= 0;
    }
}