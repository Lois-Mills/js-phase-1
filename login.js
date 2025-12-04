
function validateForm() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    // Reset previous errors
    errorMsg.textContent = "";

    // Validation rules
    if (username === "" || password === "") {
        errorMsg.textContent = "All fields are required!";
        return;
    }

    if (password.length < 8) {
        errorMsg.textContent = "Password must be at least 8 characters.";
        return;
    }

    // If validation passes
    console.log("Success: User authenticated!");
    alert("Success");
}