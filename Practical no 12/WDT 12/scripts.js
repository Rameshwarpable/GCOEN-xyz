// Select all buttons with the "section-toggle" class
const buttons = document.querySelectorAll('.section-toggle');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the target page from the button's data attribute
        const targetPage = button.getAttribute('data-target');
        
        // Open the target page in a new tab or the current tab
        window.location.href = targetPage;
    });
});