function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function navigateTo(page) {
    // Logic to navigate to different pages or sections
    scrollToSection(page);
}

function navigateToDashboard() {
    window.location.href = 'index.html#dashboard';
}
