// Using event delegation for efficient event handling [JS norm]
document.addEventListener('DOMContentLoaded', function() {
    // Card flip functionality
    const flipButtons = document.querySelectorAll('.flip-card-btn');
    
    flipButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent team-member card
            const teamMember = this.closest('.team-member');
            
            // Toggle the flipped class
            teamMember.classList.toggle('flipped');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation with accessibility considerations - Carlos
    const contactForm = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Form submission handler
    contactForm.addEventListener('submit', function(event) {
        let isValid = true;
        
        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            nameInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            nameError.style.display = 'none';
            nameInput.setAttribute('aria-invalid', 'false');
        }
        
        // Validate email
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = 'block';
            emailInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.setAttribute('aria-invalid', 'false');
        }
        
        // Validate message
        if (messageInput.value.trim() === '') {
            messageError.style.display = 'block';
            messageInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            messageError.style.display = 'none';
            messageInput.setAttribute('aria-invalid', 'false');
        }
        
        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        } else {
            // This would normally submit to a server
            // For this assignment, we'll just show an alert
            event.preventDefault();
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    });

    // Real-time validation for better UX
    nameInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            nameError.style.display = 'none';
            this.setAttribute('aria-invalid', 'false');
        }
    });
    
    emailInput.addEventListener('input', function() {
        if (emailPattern.test(this.value)) {
            emailError.style.display = 'none';
            this.setAttribute('aria-invalid', 'false');
        }
    });
    
    messageInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            messageError.style.display = 'none';
            this.setAttribute('aria-invalid', 'false');
        }
    });
    // Sticky navigation
    const nav = document.getElementById('main-nav');
    const navOffset = nav.offsetTop;
    
    function handleScroll() {
        if (window.pageYOffset > navOffset) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
});


