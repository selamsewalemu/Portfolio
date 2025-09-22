document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");
  const allSections = document.querySelectorAll("main .slide"); // select only slide sections

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").replace("#", "");

      allSections.forEach((section) => {
        if (section.id === targetId) {
          // activate the target slide
          section.classList.add("active");
        } else {
          // hide other slides
          section.classList.remove("active");
        }
      });

      // Smooth scroll to the section container
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Update active link style
      navLinks.forEach((nav) => nav.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Initially show the first section
  if (allSections.length > 0) {
    allSections[0].classList.add("active");
  }
});
