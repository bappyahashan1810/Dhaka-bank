document.getElementById('btn-withdraw').addEventListener('click', function () {
    const userWithdraw = document.getElementById('user-withdraw');
    const newWithdrawAmountString = userWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    userWithdraw.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Enter right Numebr');
        return;
    }


    const totalWitdraw = document.getElementById('total-withdraw');
    const previousWithdrawAmountString = totalWitdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);



    const totalAmount = document.getElementById('total-amount');
    const previousTotalAmountString = totalAmount.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);

    if (newWithdrawAmount > previousTotalAmount) {
        alert('Please Enter your Balance less then your Account');
        return;
    }
    totalWitdraw.innerText = newWithdrawAmount + previousWithdrawAmount;
    totalAmount.innerText = previousTotalAmount - newWithdrawAmount;
})