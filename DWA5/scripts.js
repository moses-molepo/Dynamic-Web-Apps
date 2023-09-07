// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (parseFloat(divider) === 0) {
    result.innerText = "Error: Division by zero is not allowed.";
  } else {
    const divisionResult = dividend / divider;
    if (Number.isInteger(divisionResult)) {
      result.innerText = divisionResult;
    } else {
      result.innerText = "Error: Division results in a decimal number.";
    }
  }

    // Check if either input is empty
    if (dividend.trim() === "" || divider.trim() === "") {
        result.innerText = "Division not performed. Both values are required in inputs. Try again";
      } else {
        // Perform the division if both inputs are filled
        result.innerText = dividend / divider;
      }

  // Check for invalid numbers
  if (isNaN(dividend) || isNaN(divider) || divider == 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Invalid numbers provided:", dividend, divider);
  } else {
    try {
      result.innerText = dividend / divider;
    } catch (error) {
      // Handle division error
      result.innerText = "Division not performed. An error occurred.";
      console.error("Division error:", error);
    }
  }

    // Check if inputs are valid numbers
    if (isNaN(dividend) || isNaN(divider)) {
        // Display error message on the screen
        result.innerText = "Something critical went wrong. Please reload the page";
        
        // Log the error with call stack in the browser console
        const error = new Error("Invalid inputs: Both inputs must be valid numbers");
        console.error(error);
        console.error(error.stack);
    
        return; // Exit the function to prevent further execution
      }
    
      // Perform the division if both inputs are valid numbers
      result.innerText = dividend / divider;
    });



