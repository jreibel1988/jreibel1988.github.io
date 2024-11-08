function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function navigateTo(page) {
    if (page === 'dashboard') {
        // Navigate to the dashboard section in index.html
        window.location.href = '../index.html#dashboard';
    } else {
        // Scroll to a section within the current page
        scrollToSection(page);
    }
}

function navigateToDashboard() {
    window.location.href = '../index.html#dashboard';
}
