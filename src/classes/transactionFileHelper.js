// Code Adapted from work done by Ed Wright @Martyn Clow
import fs from "fs";

export default class TransactionFileHelper{

    static getTransactionsFromFile()
    {
        const transactionPath = "./data/transactionDetails.json";

        if (!fs.existsSync(transactionPath))
        {
            console.log("No transactions file found");
        }

        const transactionList = fs.readFileSync(transactionPath);

        const transactionRawData = JSON.parse(transactionList);

        if(transactionRawData.length <= 0)
        {
            console.log("No transactions found");
        }

        return transactionRawData;
    }
};