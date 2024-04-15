document.addEventListener("DOMContentLoaded", function () {
    // Function to calculate tax
    function calculateTax(grossIncome, extraIncome, ageGroup, deductions) {
        // Convert strings to numbers
        grossIncome = parseFloat(grossIncome);
        extraIncome = parseFloat(extraIncome);
        deductions = parseFloat(deductions);

        // Calculate total income after deductions
        let totalIncome = grossIncome + extraIncome - deductions;

        // Check if age group is selected
        if (ageGroup === "") {
            showError("Please select an age group.");
            return;
        }

        // Define tax rates based on age group
        let taxRate;
        switch (ageGroup) {
            case "below-60":
                taxRate = 0.3;
                break;
            case "60-80":
                taxRate = 0.4;
                break;
            case "above-80":
                taxRate = 0.1;
                break;
        }

        // Calculate tax amount
        let taxAmount = 0;
        if (totalIncome > 800000) {
            taxAmount = taxRate * (totalIncome - 800000);
        }

        return taxAmount;
    }

    // Function to display results in modal
    function displayResults(taxAmount) {
        const modal = document.querySelector('#result');
        const openModal = document.querySelector('.open-button');
        const closeModal = document.querySelector('.close-button');

        openModal.addEventListener('click', () => {
            modal.showModal();
        });
        closeModal.addEventListener('click', () => {
            modal.close();
        }); 

        var totalParagraph = document.getElementById('total_amount');
        totalParagraph.textContent = taxAmount;
    }

    // Function to show error message
    function showError(message) {
        // Implement error display logic here
        // For now, log the error message to the console
        console.error(message);
    }

    // Event listener for form submission
    const taxForm = document.getElementById("tax-form");
    taxForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const grossIncome = document.getElementById("gross-income").value;
        const extraIncome = document.getElementById("extra-income").value;
        const ageGroup = document.getElementById("age-group").value;
        const deductions = document.getElementById("deductions").value;

        // Calculate tax
        const taxAmount = calculateTax(grossIncome, extraIncome, ageGroup, deductions);

        // Display results in modal
        displayResults(taxAmount);
    });
});
