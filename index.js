window.setTheme = function(themeName) {
    document.body.className = ''; // Reset
    if (themeName !== 'red') {
        document.body.classList.add('theme-' + themeName);
    }
    localStorage.setItem('ag-stick-theme', themeName);
}

document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = localStorage.getItem('ag-stick-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
    // Nav links active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Hover sound/vibration simulation (visual only)
    const cards = document.querySelectorAll('.module-card, .admin-btn');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Subtle glow effect handled by CSS, but could add JS logic here
        });
    });

    // Simple scroll reveal simulation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});
