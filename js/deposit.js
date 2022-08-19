//step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //step-2:get the deposit amount from the deposit input field
  const newDepositAmountFeild = document.getElementById("deposit-amount");
  const newDepositAmount = newDepositAmountFeild.value;

  //step-3: get the previous deposit amount
  const previousDepositAmountElement =
    document.getElementById("previous-deposit");
  const previousDepositAmount = previousDepositAmountElement.innerText;

  //step-4: calculate current total deposit amount
  const currentTotalDeposit =
    parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
  previousDepositAmountElement.innerText = currentTotalDeposit;

  //step-5:get previous balance
    const previousBalanceField = document.getElementById("previous-balance");

    const previousBalance = previousBalanceField.innerText;
    const curreTotalBalance = parseFloat(previousBalance) + parseFloat(newDepositAmount);

    previousBalanceField.innerText = curreTotalBalance;
  //step-5: clear the depositAmountFeild
  newDepositAmountFeild.value = "";
});
