// Simulate form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('status').textContent = "Message submitted (simulation only - no backend connected).";
  this.reset();
});
