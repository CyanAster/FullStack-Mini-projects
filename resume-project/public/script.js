// Function to reveal elements on scroll
const revealElements = () => {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight - 50) {
            element.classList.add('active');
        }
    });
};

// Event listeners
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);
