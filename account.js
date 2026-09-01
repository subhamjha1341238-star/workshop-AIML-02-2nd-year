let bankAccount = {
    accountHolderName: "Shubham",
    accountNumber: 123456789,
    accountBalance: 10000000,

    deposit: function (amount) {
        this.accountBalance = this.accountBalance + amount;
        console.log(amount + " deposited successfully");
    },

    withdraw: function (amount) {
        if (amount > this.accountBalance) {
            console.log("Insufficient Balance");
        } else {
            this.accountBalance = this.accountBalance - amount;
            console.log(amount + " withdrawn successfully");
        }
    },

    displayBalance: function () {
        console.log("Current Balance:", this.accountBalance);
    }
};

bankAccount.displayBalance();

bankAccount.deposit(5000);
bankAccount.displayBalance();

bankAccount.withdraw(3000);
bankAccount.displayBalance();

bankAccount.withdraw(20000);