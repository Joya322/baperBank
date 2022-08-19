//step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //step-2:get the deposit amount from the deposit input field
  const newDepositAmountFeild = document.getElementById("deposit-amount");
  const newDepositAmountString = newDepositAmountFeild.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //step-3: clear the newDepositAmountFeild
  newDepositAmountFeild.value = "";

  if (isNaN(newDepositAmount)) {
    alert("Please provide a valid amount");
    return;
  }

  //step-4: get the previous deposit amount
  const previousDepositAmountElement =
    document.getElementById("previous-deposit");
  const previousDepositAmountString = previousDepositAmountElement.innerText;

  const previousDepositAmount = parseFloat(previousDepositAmountString);

  //step-5: calculate current total deposit amount
  const currentTotalDeposit =
    previousDepositAmount + newDepositAmount;
  previousDepositAmountElement.innerText = currentTotalDeposit;

  //step-6:get previous balance
  const previousBalanceElement = document.getElementById("previous-balance");

  const previousBalance = previousBalanceElement.innerText;
  const curreTotalBalance =
    parseFloat(previousBalance) + parseFloat(newDepositAmount);

  //step-7:set currentTotalBalance into previousBalanceElement
  previousBalanceElement.innerText = curreTotalBalance;
});
