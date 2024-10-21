function getDOB() {
    
    const dobInput = document.getElementById('inputDob').value;
    const currentDateInput = document.getElementById('cdate').value;

   
    if (!dobInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    
    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

   
    let age = currentDate.getFullYear() - dob.getFullYear();
    

    document.getElementById('currentAge').textContent = `Your age is ${age} years.`;
}

