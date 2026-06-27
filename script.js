document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    // Check initial scroll position
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Form Validation for Reservation
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault(); // Prevent actual submission for demo
                
                // Show success message (in a real app, you'd send data to server here)
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Reservation Confirmed!';
                submitBtn.classList.remove('btn-primary');
                submitBtn.classList.add('btn-success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.classList.remove('btn-success');
                    submitBtn.classList.add('btn-primary');
                    form.reset();
                    form.classList.remove('was-validated');
                }, 3000);
            }

            form.classList.add('was-validated');
        }, false);
    });

    // Set minimum date for reservation to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});