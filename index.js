var expenses = [];

for (var i = 0; i < 7; i++) {
  var expense = prompt("Enter your expense for Day " + (i + 1) + " (in ₨):");
  expenses.push(parseFloat(expense));
}

function getTotalExpense(expArray) {
  var total = 0;
  for (var i = 0; i < expArray.length; i++) {
    total = total + expArray[i];
  }
  return total;
}

function getAverageExpense(expArray) {
  return getTotalExpense(expArray) / expArray.length;
}

console.log("Total Expense: ₨" + getTotalExpense(expenses).toFixed(2));
console.log("Average Expense: ₨" + getAverageExpense(expenses).toFixed(2));