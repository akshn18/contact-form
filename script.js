"use strict";

const form = document.getElementById("signup-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fields = [
    { id: "first-name", message: "First Name cannot be empty" },
    { id: "last-name", message: "Last Name cannot be empty" },
    { id: "email", message: "Looks like this is not an email" },
  ];

  let isValid = true;

  fields.forEach(({ id, message }) => {
    const input = document.getElementById(id);
    const errorMsg = input.nextElementSibling;
    const value = input.value.trim();

    // reset styles
    input.classList.remove("input-error");
    errorMsg.textContent = "";

    if (
      value === "" ||
      (id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    ) {
      input.classList.add("input-error");
      errorMsg.textContent = message;
      isValid = false;

      if (id === "email" && value === "") {
        input.placeholder = "email@example/com";
      }
    }
  });

  if (isValid) {
  // Show the custom success message box
  const successBox = document.getElementById("message-box");
  successBox.style.display = "block";

  // Hide it automatically after 3 seconds
  setTimeout(() => {
    successBox.style.display = "none";
  }, 3000);

  form.reset(); // Reset the form after successful submission
}

});