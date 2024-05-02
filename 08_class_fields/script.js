class Wallet {
  // Private properties get created by using a hash # prefix and cannot be legally referenced outside of the class
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Not enough funds");
    } else {
      this.#balance -= amount;
      this.#processWithdraw(amount);
    }
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this.#transactions.push({
      type: "deposit",
      amount,
    });
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this.#transactions.push({
      type: "withdraw",
      amount,
    });
  }

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}

const wallet = new Wallet();

wallet.deposit(500);
wallet.withdraw(100);

console.log(wallet.balance);

// Private field must be declared in an enclosing class
// wallet.#processWithdraw(200);
// console.log(wallet.#balance);
