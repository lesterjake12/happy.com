// Function to check the login password
function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "yourPassword"; // Replace this with your password

    if (password === correctPassword) {
        window.location.href = "index.html"; // Redirect to the main page
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Password!'
        });
    }
}

// Function to open the envelope with animation
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const content = document.getElementById("content");

    if (!envelope.classList.contains('opened')) {
        envelope.classList.add('opened');

        setTimeout(() => {
            content.style.display = "block"; // Show content after animation
        }, 1000); // Delay matches the CSS animation duration
    }
}
