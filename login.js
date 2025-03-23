document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    
    if (!form) {
        console.error('Login form not found!');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        try {
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            // Basic validation
            if (!email || !password) {
                alert('All fields are required');
                return;
            }

            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');

            // Find user
            const user = users.find(u => u.email === email && u.password === password);

            if (!user) {
                alert('Invalid email or password');
                return;
            }

            // Set current user
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            console.log('Login successful');
            window.location.href = 'homepage.html';

        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    });

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'index.html'; // Updated from login.html
    }
});
