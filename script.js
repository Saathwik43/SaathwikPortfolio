// Typing animation configuration
var typed = new Typed('#element', {
    strings: ['Data Science Student !','Game Developer !','Machine Learning Enthusiast !'],
    typeSpeed: 60,
});

// Function to handle smooth scrolling to sections when clicking navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links with hash (#) references
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    
    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            
            // Handle the case of href="/"
            if (targetId === "/") {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            // Find the target element
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate position to scroll to (with a small offset for the navbar)
                const position = targetSection.offsetTop - 80;
                
                // Scroll smoothly to the target position
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
                
                // Update active class
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Highlight active section on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 100; // Offset for better detection
        
        // Find which section is currently visible
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Find the corresponding nav link and make it active
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === '#' + section.getAttribute('id')) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    });
});

/* Add this to your JavaScript file (script.js) */
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Add this to your script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Get all sections that we want to track
    const sections = document.querySelectorAll('section[id]');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Function to highlight active section in navigation
    function highlightNavigation() {
        // Get current scroll position
        let scrollPosition = window.scrollY + 200; // Adding offset for better detection
        
        // Check each section to see if it's in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && 
                scrollPosition < sectionTop + sectionHeight) {
                
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to corresponding navigation link
                const activeLink = document.querySelector('nav ul li a[href="#' + sectionId + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', highlightNavigation);
    
    // Call once on page load to set initial state
    highlightNavigation();
});

// Contact form functionality using EmailJS
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();
            
            const submitButton = contactForm.querySelector('.submit-btn');
            const originalButtonText = submitButton.textContent;

            // --- VALIDATION (Optional but Recommended) ---
            const name = contactForm.querySelector('input[name="name"]').value.trim();
            const email = contactForm.querySelector('input[name="email"]').value.trim();
            const message = contactForm.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            // Disable the button and show "Sending..."
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
            
            // The parameters object that will be sent to your EmailJS template
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message
            };
            
            // Your Service ID, Template ID, and Public Key from your EmailJS account
            const serviceID = 'service_ibyrzle';
            const templateID = 'template_8mnddsq';
            
            emailjs.send(serviceID, templateID, templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message using your CSS class
                    submitButton.textContent = "Message Sent!";
                    submitButton.classList.add('success');
                    
                    // Clear the form
                    contactForm.reset();
                    
                    // Reset the button after 3 seconds
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.textContent = originalButtonText;
                        submitButton.classList.remove('success');
                    }, 3000);
                    
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error message using your CSS class
                    submitButton.textContent = "Failed to Send";
                    submitButton.classList.add('error');
                    
                    // Reset the button after 3 seconds
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.textContent = originalButtonText;
                        submitButton.classList.remove('error');
                    }, 3000);
                });
        });
    }
});

// Resume download animation
document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.querySelector('a[href="Saathwikresume.pdf"]');
    
    if (resumeButton) {
        resumeButton.addEventListener('click', function(event) {
            // Prevent default download for animation
            event.preventDefault();
            
            const originalContent = this.innerHTML;
            const downloadUrl = this.getAttribute('href');
            
            // Start download animation
            this.classList.add('downloading');
            this.innerHTML = `
                <div class="download-spinner"></div>
                Downloading...
            `;
            this.style.pointerEvents = 'none';
            
            // Simulate download progress
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += Math.random() * 30;
                if (progress > 90) progress = 90;
                
                this.innerHTML = `
                    <div class="download-spinner"></div>
                    Downloading... ${Math.round(progress)}%
                `;
            }, 200);
            
            // Complete download after 2 seconds
            setTimeout(() => {
                clearInterval(progressInterval);
                
                // Show success state
                this.classList.remove('downloading');
                this.classList.add('download-success');
                this.innerHTML = `
                    <div class="download-checkmark">✓</div>
                    Downloaded!
                `;
                
                // Actually trigger the download
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = 'Saathwikresume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    this.classList.remove('download-success');
                    this.innerHTML = originalContent;
                    this.style.pointerEvents = 'auto';
                }, 2000);
                
            }, 2000);
        });
    }
});