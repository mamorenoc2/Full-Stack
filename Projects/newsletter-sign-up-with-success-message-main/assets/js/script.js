function submitForm(event) {
    const selectEl = (classEl) => document.querySelector(classEl);
    
    ke
    let emailInput = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let successMessage = document.getElementById("successMessage");

    // Reset validation messages
    emailError.textContent = "";
    successMessage.textContent = "";
    
    // Validate email format
    let email = emailInput.value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }
}