document.getElementById('btn-deposit').addEventListener('click', function () {
    const userDeposit = document.getElementById('user-deposit');
    const newDepositString = userDeposit.value;
    const newDeposit = parseFloat(newDepositString);

    userDeposit.value = '';

    if (isNaN(newDeposit)) {
        alert('Please Enter right keyword');
        return;
    }

    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmountStrnig = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountStrnig);
    totalDeposit.innerText = newDeposit + previousDepositAmount;


    const totalAmount = document.getElementById('total-amount');
    const previousTotalAmountString = totalAmount.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);
    totalAmount.innerText = previousTotalAmount + newDeposit;


})