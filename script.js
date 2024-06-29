// script.js

// Function to generate a random password
function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Function to copy password to clipboard
function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(passwordField.value).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy password: ", err);
    });
}

// Event listener for Generate Password button
document.querySelector(".btn").addEventListener("click", () => {
    const password = generatePassword(12); // You can change the length of the password here
    document.getElementById("password").value = password;
});

// Event listener for Copy icon
document.querySelector(".fa-copy").addEventListener("click", copyPassword);
