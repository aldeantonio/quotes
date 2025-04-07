document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const lines = document.querySelectorAll('.line');
    let currentIndex = 0;
    
    // Show initial testimonial
    showTestimonial(currentIndex);
    
    // Navigation lines click event
    lines.forEach(line => {
        line.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            showTestimonial(currentIndex);
        });
    });
    
    // Auto-rotate testimonials every 5 seconds
    let interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 1000);
    
    // Pause auto-rotation on hover
    const container = document.querySelector('.testimonials-container');
    container.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    container.addEventListener('mouseleave', () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000);
    });
    
    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        // Remove active class from all lines
        lines.forEach(line => {
            line.classList.remove('active');
        });
        
        // Show selected testimonial
        testimonials[index].classList.add('active');
        
        // Highlight selected line
        lines[index].classList.add('active');
        
        // Update current index
        currentIndex = index;
    }
});