class BankAccount {
    constructor(accountNumber, owner, balance = 0) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            document.write(`Deposit successful. New balance: $${this.balance} \n`);
        } else {
            console.error("Deposit amount must be greater than zero. \n");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            document.write(`Withdrawal successful. New balance: $${this.balance} \n`);
        } else {
            console.error("Insufficient funds or invalid withdrawal amount. \n");
        }
    }

    displayBalance() {
        document.write(
            `Account Number: ${this.accountNumber}, Owner: ${this.owner}, Balance: $${this.balance} \n`
        );
    }
}


const account1 = new BankAccount("12345", "Alice Johnson", 500);
const account2 = new BankAccount("67890", "Bob Smith");


account1.displayBalance();
account1.deposit(300);
account1.withdraw(250);

account2.displayBalance();
account2.deposit(1000);
account2.withdraw(1200);   
