// script.js
const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const contact = document.getElementById('contact ').value;

    // Validate input (you can add more validation rules )
    if (username.trim() === '' || password.trim() === '' || name.trim() === '' || contact.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Perform registration logic (e.g., send data to server)
    console.log('Registered:', username);
}
);
