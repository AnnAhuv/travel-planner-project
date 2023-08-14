// Base BankAccount class
class BankAccount {
  #accountNumber;
  #balance;
  #interestRate; // in percentage
  #pin;

  constructor(accountNumber, interestRate, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#interestRate = interestRate;
    this.#balance = initialBalance;
    this.#pin = Math.floor(Math.random() * 9000 + 1000);
  }

  // This setter prevents direct modifications, while allowing deposits and withdrawals via specific methods.
  set balance(amount) {
    console.log("Please use deposit or withdraw methods.");
  }

  getBalance(pin) {
    if (pin === this.#pin) {
      return this.#balance;
    } else {
      console.log("The provided pin is incorrect");
    }
  }

  // Getter and setter for interest rate with validation and computation
  get interestRate() {
    return this.#interestRate;
  }

  set interestRate(rate) {
    if (rate < 0 || rate > 100) {
      console.log("Interest rate should be between 0 and 100%.");
      return;
    }
    this.#interestRate = rate;
  }

  // Deposit method with validation
  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount should be positive.");
      return;
    }
    this.#balance += amount;
  }

  // Withdraw method with validation and balance computation
  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdraw amount should be positive.");
      return;
    }
    if (this.#balance - amount < 0) {
      console.log("Insufficient funds.");
      return;
    }
    this.#balance -= amount;
  }

  // A method that modifies a private property based on some conditions
  applyMonthlyFee() {
    if (this.#balance < 1000) {
      this.#balance -= 10; // Deduct a monthly fee for low balances
    }
  }

  // Applying interest to the account
  applyInterest() {
    const interest = (this.balance * this.#interestRate) / 100;
    this.deposit(interest); // reusing the deposit method from the base class
  }

  describe() {
    return `Account Number: ${this.#accountNumber}, Balance: ${this.#balance}`;
  }
}

class SavingsAccount extends BankAccount {
  #minimumBalance;

  constructor(accountNumber, interestRate, initialBalance, minimumBalance) {
    super(accountNumber, interestRate, initialBalance);
    this.#minimumBalance = minimumBalance;
  }

  // Getter for minimum balance
  get minimumBalance() {
    return this.#minimumBalance;
  }

  // Setter for minimum balance with validation
  set minimumBalance(amount) {
    if (amount < 0) {
      console.log("Minimum balance should be positive.");
      return;
    }
    this.#minimumBalance = amount;
  }

  // Override the withdraw method to check against minimum balance
  withdraw(amount) {
    super.withdraw(amount); // Calling the parent class's withdraw method
    if (this.balance < this.#minimumBalance) {
      console.warn(`Your balance is below the minimum balance of ${this.#minimumBalance}. Additional fees may apply.`);
      this.applyPenalty();
    }
  }

  // Apply penalty if balance goes below minimum balance
  applyPenalty() {
    console.log("Applying penalty for going below minimum balance.");
    const penalty = 25; // Some penalty amount
    super.withdraw(penalty); // Use the parent class's withdraw method to deduct the penalty
  }

  describe() {
    return super.describe() + `, Minimum Balance: ${this.#minimumBalance}`;
  }
}

class StudentAccount extends BankAccount {


  // No monthly fee is applied for student accounts, hence we override the applyMonthlyFee method to do nothing
  applyMonthlyFee() {
    console.log("No monthly fee for student accounts!");
  }

  // A restriction for student account might be a maximum balance
  deposit(amount) {
    const maxBalance = 3000; // Arbitrary maximum balance limit
    if (this.balance + amount > maxBalance) {
      console.log("Deposit would exceed the maximum balance limit for a student account.");
      return;
    }
    super.deposit(amount);
  }

  describe() {
    return super.describe() + ` (Student Account)`;
  }
}


console.log("-------Testing BankAccount Class-------");

let account = new BankAccount("001", 500, 5);
console.log(account);
// // Test getters
// console.log(account.balance); // Expected: 500
// console.log(account.interestRate); // Expected: 5

// // Test setters
// console.log("Setting balance directly (forbidden action):");
// account.balance = 600; // Expected: Please use deposit or withdraw methods.
// console.log(account.balance); // Expected: 500

// console.log("Setting invalid interest rate:");
// account.interestRate = 150; // Expected: Interest rate should be between 0 and 100%.
// console.log(account.interestRate); // Expected: 5

// account.interestRate = 7;
// console.log(account.interestRate); // Expected: 7

// // Test deposit and withdraw
// account.deposit(200);
// console.log(account.balance); // Expected: 700
// account.withdraw(50);
// console.log(account.balance); // Expected: 650
// account.withdraw(700); // Expected: Insufficient funds.

// // Test applyMonthlyFee and applyInterest
// account.applyMonthlyFee(); // Expected: Nothing, balance > 1000 condition not met
// account.applyInterest(); // Expected: Adds interest to account
// console.log(account.describe()); // Expected: Account Number: 001, Balance: 683.5

// console.log("-------Testing SavingsAccount Class-------");

// let savings = new SavingsAccount("002", 1200, 4, 800);

// savings.withdraw(600); // Expected: Nothing
// console.log(savings.describe()); // Expected: Account Number: 002, Balance: 600, Minimum Balance: 800
// savings.withdraw(20); // Expected: Your balance is below the minimum balance of 800. Additional fees may apply. Followed by: Applying penalty for going below minimum balance.
// console.log(savings.describe()); // Expected: Account Number: 002, Balance: 555, Minimum Balance: 800

// console.log("-------Testing StudentAccount Class-------");

// let studentAcc = new StudentAccount("003", 2800, 2);

// console.log(studentAcc.describe()); // Expected: Account Number: 003, Balance: 2800 (Student Account)

// studentAcc.deposit(300); // Expected: Nothing
// console.log(studentAcc.describe()); // Expected: Account Number: 003, Balance: 3100 (Student Account)
// studentAcc.deposit(200); // Expected: Deposit would exceed the maximum balance limit for a student account.

// studentAcc.applyMonthlyFee(); // Expected: No monthly fee for student accounts!
