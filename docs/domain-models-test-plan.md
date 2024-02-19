# Test Plan

| Statement                                         | User Story                                                                                      | Nouns                 | Verbs        |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------|-----------------------|--------------|
| 1. A customer should be able to access an account | As a customer, I want to be able to access my bank account via the REPL interface,              | Account               | Access       |
|                                                   | So I can access information about my bank account.                                              |                       |              |
|                                                   |                                                                                                 |                       |              |
| 2. A customer should be able to deposit funds     | As a customer, I want to be able to deposit funds into my bank account,                         | Account               | Deposit      |
| into their account                                | So I can keep my money safe in the account.                                                     |                       |              |
|                                                   |                                                                                                 |                       |              |
| 3. A customer should be able to withdraw funds    | As a customer, I want to be able to withdraw funds from my account,                             | Account               | Withdraw     |
| from their account                                | So I can access my money                                                                        |                       |              |
|                                                   |                                                                                                 |                       |              |
| 4. A customer must not be able to withdraw more   | As a bank manager, I do not want customers to be able to withdraw more money than what is in    | Account, Manager      | Withdraw     |
| funds from their account than they have           | their accounts, so the bank doesn't lose money                                                  |                       |              |
|                                                   |                                                                                                 |                       |              |
| 5. A customer should be able to print their       | As a customer, I want to be able to print account statements including the date of transactions | Account               | Print, Track |
| account statements with transaction dates         | So I can keep track of my finances                                                              |                       |              |
|                                                   |                                                                                                 |                       |              |
| 6. A customer should be able to print their       | As a customer, I want to be able to print account statements with updated balances, so          | Account, balance      | updated      |
| account statements with updated balances          | I can keep track of my finances                                                                 |                       |              |
|                                                   |                                                                                                 |                       |              |
| 7. A customer should be able to print             | As a customer, I want to be able to print account statements with outgoing transactions,        | Account, transaction  | outgoing     |
| account statements with outgoings                 | So I can see what money is leaving my account                                                   |                       |              |
|                                                   |                                                                                                 |                       |              |
| 8. A customer should be able to print             | As a customer, I want to be able to print account statements with incoming transactions         | Account, transaction  | incoming     |
| account statements with incomings                 | So I can see what money is coming into my account                                               |                       |              |
|                                                   |                                                                                                 |                       |              |
| 9. A customer should be able to print             | As a customer, I want to be able to print account statements with transaction dates,            | Account, transaction, | updated,     |
| account statements with transaction dates,        | updated balance, outgoings and incomings, so I can have a highly detailed                       | balance               | outgoing,    |
| updated balances, outgoings and incomings         | overview of all my financial movements                                                          |                       | incoming     |
|                                                   |                                                                                                 |                       |              |

# Domain Models 

| Objects                            | Properties            | Messages                    | Output |
|------------------------------------|-----------------------|-----------------------------|--------|
| Account                            | ID @Int               | setID()                     | Void   |
|                                    | username @String      | getID()                     | Int    |
|                                    | transactions @Array[] | setUsername()               | Void   |
|                                    | balance @Int          | getUsername()               | String |
|                                    |                       | addTransaction(transaction) | Void   |
|                                    |                       | printTransaction()          | Void   |
|                                    |                       | setBalance()                | Void   |
|                                    |                       | getBalance()                | Int    |
|                                    |                       |                             |        |
| overDraft Account @extends Account | overdraftLimit        | setOverdraftLimit()         | Void   |
|                                    |                       | getOverdraftLimit           | Int    |
|                                    |                       |                             |        |
| Transaction                        | date @String          | setDate(day, month, year)   | Void   |
|                                    | credit @Int           | getDate()                   | String |
|                                    | debit @Int            | setCredit(paymentIn)        | Void   |
|                                    | balance @Int          | getCredit                   | Int    |
|                                    |                       | setDebit(paymentOut)        | Void   |
|                                    |                       | getDebit()                  | Int    |
|                                    |                       | updateBalance()             | Void   |
|                                    |                       | setBalance()                | Void   |
|                                    |                       | getBalance()                | Int    |
|                                    |                       |                             |        |
|                                    |                       |                             |        |

# Tests

| Use Case                                          | Test                                                                                             |
|---------------------------------------------------|--------------------------------------------------------------------------------------------------|
| 1. A customer should be able to access an account | Test one: account class gets made                                                                |
|                                                   |                                                                                                  |
| 2. A customer should be able to deposit funds     | Test One: Credit is only set if the number given is a positive number                            |
| into their account                                | Test Two: Credit is only set if the number give is an integer                                    |
|                                                   | Test Three: addTransactions increases array length by 1                                          |
|                                                   |                                                                                                  |
| 3. A customer should be able to withdraw funds    | Test One: Debit should only be set if the given number is a positive                             |
| from their account                                | Test Two: Debit should only be set if the given variable is an integer                           |
|                                                   |                                                                                                  |
| 4. A customer must not be able to withdraw more   | Test One: Balance should only be updated if debit <= balance                                     |
| funds from their account than they have           |                                                                                                  |
|                                                   |                                                                                                  |
| 5. A customer should be able to see their account | Test One: setDate() sets the current date                                                        |
| statements with                                   | Test Two: the date of transactions are saved in account transaction array are printed to console |
|                                                   |                                                                                                  |
| 6. A customer should be able to print their       | Test one: Balance of transactions saved in transactions array in account are printed to console  |
| account statements with updated balance           |                                                                                                  |
|                                                   |                                                                                                  |
| 7. A customer should be able to print their       | Test One: Credit being paid into the account should be added and printed out                     |
| account statements with outgoings                 |                                                                                                  |
|                                                   |                                                                                                  |
| 8. A customer should be able to print their       | Test One: Debit taken out of the account should be added to transaction and printed out          |
| account statements with incomings                 |                                                                                                  |
|                                                   |                                                                                                  |
| 9. A customer can have an overdraft account       | Test One: Balance should only be updated if balance + overdraftLimit >= debit                    |
|                                                   |                                                                                                  |

