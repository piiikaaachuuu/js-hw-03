/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    let transactions = {
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
    };
    return transactions;
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
    } else {
      alert("Зняття такої суми не можливо, недостатньо коштів!");
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }
    return sum;
  },
};

account.deposit(500); // balance = 500
account.deposit(400); // balance = 900
account.withdraw(300); // balance = 600
account.withdraw(100); // balance = 500
account.deposit(500); // balance = 1000

console.log(account.getTransactionTotal("deposit")); // 1400
console.log(account.getTransactionTotal("withdraw")); // 400
console.log(account.transactions);
console.log(account.balance); // 1000
console.log(account.getTransactionDetails(3));
