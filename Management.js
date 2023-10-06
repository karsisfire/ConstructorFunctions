function BankAccount(AccountNumber, name, type, balance){
    this.AcNo = AccountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.deposit = function(amount){
        this.balance = amount + this.balance;
    }
    this.withdraw = function(amount){
        this.balance = this.balance - amount;
    }
    this.checkBalance = function(){
        console.log(this.balance);
    }
    this.isActive = function(){
        if(this.balance > 0){
            return "active";
        }
        else{
            return "inactive";
        }
    }
}
const BankAccount1 = new BankAccount(12345, "Sunil", "savings", 100);
const BankAccount2 = new BankAccount(54321, "Shetty", "savings", 0);
const BankAccount3 = new BankAccount(12453, "Shipa", "savings", 700);
const BankAccount4 = new BankAccount(54213, "Pooja", "savings", 1000);
const BankAccount5 = new BankAccount(80232, "Ganesh", "savings", 0);

BankAccount1.deposit(250);
BankAccount1.withdraw(100);
BankAccount1.checkBalance();
console.log(BankAccount1.isActive());

BankAccount2.deposit(250);
BankAccount2.withdraw(200);
BankAccount2.checkBalance();
console.log(BankAccount2.isActive());

BankAccount3.deposit(500);
BankAccount3.withdraw(1200);
BankAccount3.checkBalance();
console.log(BankAccount3.isActive());

BankAccount4.deposit(250);
BankAccount4.withdraw(100);
BankAccount4.checkBalance();
console.log(BankAccount4.isActive());

BankAccount5.deposit(250);
BankAccount5.withdraw(250);
BankAccount5.checkBalance();
console.log(BankAccount5.isActive());

function getTotalBalance(){
    let totalBal = BankAccount1.balance + BankAccount2.balance + BankAccount3.balance + BankAccount4.balance + BankAccount5.balance;
    return totalBal;
}
console.log(getTotalBalance());