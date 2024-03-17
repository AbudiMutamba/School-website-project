// Example JavaScript for a School Website

// Function to display current date
function displayDate() {
  var currentDate = new Date();
  var dateString = currentDate.toDateString();
  document.getElementById("currentDate").innerHTML = dateString;
}

// Function to toggle visibility of a section
function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

// Function to validate a form
function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  if (name == "" || email == "") {
    alert("Name and email must be filled out");
    return false;
  }
}

// Function to handle a form submission
function submitForm() {
  if (validateForm()) {
    alert("Form submitted successfully!");
    // Additional code for form submission (e.g., AJAX request)
  }
}

// Example usage of functions
window.onload = function() {
  displayDate();
};
