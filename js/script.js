/* =====================================================
   Mobile Navigation Toggle
   ===================================================== */

// Select menu toggle button and navigation links
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

// Toggle navigation menu on mobile screens
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

/* =====================================================
   Contact Form Validation
   ===================================================== */

// Select form and input fields
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let isValid = true;

    // Validate Name
    if (name.value.trim() === "") {
      showError(name, "Name is required");
      isValid = false;
    } else {
      showSuccess(name);
    }

    // Validate Email
    if (email.value.trim() === "") {
      showError(email, "Email is required");
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showError(email, "Please enter a valid email address");
      isValid = false;
    } else {
      showSuccess(email);
    }

    // Validate Message
    if (message.value.trim() === "") {
      showError(message, "Message cannot be empty");
      isValid = false;
    } else {
      showSuccess(message);
    }

    // If all fields are valid
    if (isValid) {
      alert("Thank you! Your message has been sent successfully.");

      // Reset form after successful submission
      contactForm.reset();

      // Remove success styles
      clearStyles([name, email, message]);
    }
  });
}

/* =====================================================
   Helper Functions
   ===================================================== */

// Show error message
function showError(input, message) {
  const formGroup = input.parentElement;
  const errorMsg = formGroup.querySelector(".error-msg");

  errorMsg.textContent = message;
  input.style.borderColor = "#dc2626";
}

// Show success state
function showSuccess(input) {
  const formGroup = input.parentElement;
  const errorMsg = formGroup.querySelector(".error-msg");

  errorMsg.textContent = "";
  input.style.borderColor = "#16a34a";
}

// Clear input styles after form reset
function clearStyles(inputs) {
  inputs.forEach((input) => {
    input.style.borderColor = "#cbd5e1";
  });
}

// Email validation using regular expression
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
