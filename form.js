document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('form1').style.display = 'none'; 
    document.getElementById('form2').style.display = 'block'; 
});

document.getElementById('combinedForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission

    const formData = new FormData(event.target);

    // Send combined data to Web3Forms
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        mode: 'no-cors', // Use no-cors mode
        body: new URLSearchParams(formData), // Use URLSearchParams for form submission
    })
    .then(() => {
        // Alert the user that the submission is complete
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    });
});
