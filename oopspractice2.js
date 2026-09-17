class BankAccount {

    constructor(accountNo, name, balance) {
        this.accountNo = accountNo;
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("Money Deposited:", amount);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("Money Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance() {
        console.log("Account No:", this.accountNo);
        console.log("Name:", this.name);
        console.log("Balance:", this.balance);
    }
}
let acc1 = new BankAccount(1001, "shubham", 5000);
let acc2 = new BankAccount(1002, "shiwang", 2000);

acc1.deposit(1500);
acc1.withdraw(2000);
acc1.displayBalance();


acc2.withdraw(3000);
acc2.deposit(500);
acc2.displayBalance();
