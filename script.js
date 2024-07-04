function calculateLoan() {
    // Get form values
    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value);
    const years = parseFloat(document.getElementById('years').value);

    // Calculate monthly interest rate
    const monthlyInterestRate = (interest / 100) / 12;
    // Calculate number of payments
    const numberOfPayments = years * 12;

    // Calculate monthly payment
    const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const monthlyPayment = (amount * x * monthlyInterestRate) / (x - 1);

    // Calculate total payment and total interest
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - amount;

    // Display results
    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
    document.getElementById('total-payment').textContent = totalPayment.toFixed(2);
    document.getElementById('total-interest').textContent = totalInterest.toFixed(2);
}
