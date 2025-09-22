document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll("main section");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#","");

      sections.forEach(section => {
        if(section.id === targetId){
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });

      // Highlight active link
      navLinks.forEach(nav => nav.classList.remove("active"));
      link.classList.add("active");

      // Smooth scroll
      const targetSection = document.getElementById(targetId);
      if(targetSection){
        targetSection.scrollIntoView({ behavior:"smooth", block:"start" });
      }
    });
  });
});
