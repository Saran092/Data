alert("* All Fields are Required *");

document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('form1').style.display = 'none'; 
    document.getElementById('form2').style.display = 'block'; 
});

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('form1').style.display = 'block'; 
    document.getElementById('form2').style.display = 'none'; 
});

document.getElementById('combinedForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission

    // Check if all required fields are filled
    const requiredFields = this.querySelectorAll('[required]');
    let allFilled = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            allFilled = false;
            field.classList.add('error'); 
        } else {
            field.classList.remove('error'); 
        }
    });

    if (!allFilled) {
        alert('Please fill all required fields.');
        return;
    }

    const formData = new FormData(event.target);

    // Disable the submit button to prevent multiple submissions
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;

    // Show loading spinner
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = 'block';

    // Send combined data to Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbwYbqWkyNd_2h8XvSAIYI36Q3QkHZ77fu-DpOYGvx63gXem-l8zWveVXdO97hcxkf6Mnw/exec', { // Replace with your Google Apps Script URL
        method: 'POST',
        body: formData, 
    })
    .then(() => {
        // Alert the user that the submission is complete
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    })
    .finally(() => {
        // Re-enable the submit button and hide loading spinner
        submitButton.disabled = false;
        loadingSpinner.style.display = 'none'; 
    });
});
