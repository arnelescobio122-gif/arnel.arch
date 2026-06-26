// Smooth scroll for buttons
function scrollProjects() {
    const section = document.getElementById("projects");
    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".project, .service-card, .about-card").forEach(el => {
    observer.observe(el);
});
