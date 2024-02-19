const transaction2 = new Transaction(account.getBalance());

transaction2.setCredit(2000);
transaction2.setDate("13", "01", "2012");
transaction2.setBalance(transaction2.getCredit());

account.addTransaction(transaction2);