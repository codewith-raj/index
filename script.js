document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get username and password
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Simulated authentication (Replace with backend API)
    if (username === "student" && password === "marketplace") {
        alert("Sign-in successful! Redirecting...");
        window.location.href = 'marketplace.html'; // Redirect to the main page
    } else {
        alert("Invalid username or password.");
    }
});


