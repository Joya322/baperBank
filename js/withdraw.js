//step-1: add event listener to the deposit button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step-2:get the withdraw amount from the deposit input field
  const newWithdrawAmountField = document.getElementById("withdraw-amount");

  const newWithdrawAmountString = newWithdrawAmountField.value;

  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //step-3: clear the newWithdrawAmountField
    newWithdrawAmountField.value = "";
    
    if (isNaN(newWithdrawAmount)) {
        alert("Please provide a valid amount")
        return;
    }
  //step-4: get the previous withdraw amount
  const previousWithdrawAmountElement =
    document.getElementById("previous-withdraw");
  const previousWithdrawAmountString = previousWithdrawAmountElement.innerText;

  const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

  //step-5: get previous balance
  const previousBalanceElement = document.getElementById("previous-balance");

  const previousBalanceString = previousBalanceElement.innerText;

  const previousBalance = parseFloat(previousBalanceString);

  //step-6: calculate current total withdraw amount
  if (newWithdrawAmount > previousBalance) {
    alert("Insufficent Balance. Please Enter a valid Amount");
  } else {
    const currentTotalWithdraw = previousWithdrawAmount + newWithdrawAmount;

    //step-7: set currentTotalWithdraw into previousWithdrawAmountField
    previousWithdrawAmountElement.innerText = currentTotalWithdraw;

    //step-8: update previousBalance
    const currentTotalBalance = previousBalance - newWithdrawAmount;

    previousBalanceElement.innerText = currentTotalBalance;
  }
});
