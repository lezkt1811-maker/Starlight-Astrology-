// Simple interactivity for the editor mockup
document.addEventListener('DOMContentLoaded', () => {
    console.log('Code Editor loaded - HTML | CSS | JS split ready');

    // Example: Click handlers for bottom icons (extend as needed)
    const icons = document.querySelectorAll('.icons span');
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            alert('Action triggered: ' + icon.textContent);
        });
    });
});
