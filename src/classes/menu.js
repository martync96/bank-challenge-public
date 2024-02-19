import Transaction from "./transaction.js";

export default class Menu{
 
    printOptions = () => {
        console.log("1. Deposit Funds");
        console.log("2. Withdraw Funds");
        console.log("3. Print Statement");
        console.log("4. Exit");
    }
    
    printMenu = () => {
        
        switch(menuOption)
        {
            case 1:

                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                this.exit();
                break;
            default:
                console.log("Please enter a valid option");
                this.printMenu();
                break;
        }
    }

    depositFunds(){

    }

    withdrawFunds(){

    }

    printStatement(){

    }

    exit(){
        process.exit();
    }
    
}