// script.js

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");
    const allSections = document.querySelectorAll("main section"); // Only main sections (About, Skills, Projects, CV, Contact)

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href").replace("#", "");

            // Remove active from all sections and add slide effect to the target
            allSections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add("active");  // Show the target section
                } else {
                    section.classList.remove("active"); // Hide others
                }
            });

            // Update nav active class
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");

            // Smooth scroll to the top of the section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Optional: show the first section (About) on page load
    const firstSection = document.getElementById("about");
    if (firstSection) {
        firstSection.classList.add("active");
    }
});
