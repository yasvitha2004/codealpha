const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";

function updateDisplay() {
  display.value = currentInput;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");

    if (btn.id === "clear") {
      currentInput = "";
    } else if (btn.id === "equal") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      } 
    } else {
      currentInput += value;
    }

    updateDisplay();
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/.=c";
  if (!allowedKeys.includes(e.key.toLowerCase())) return;

  if (e.key === "Enter" || e.key === "=") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else if (e.key.toLowerCase() === "c") {
    currentInput = "";
  } else {
    currentInput += e.key;
  }
  updateDisplay();
});