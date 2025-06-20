// Theme Toggle (Dark/Light Mode)
const toggleBtn = document.getElementById('modeToggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Section Toggle: Show About and Hide Home
const aboutLink = document.getElementById('aboutLink');
const aboutSection = document.getElementById('about');
const homeSection = document.getElementById('home');

aboutLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent link default behavior
  homeSection.style.display = 'none';     // Hide Home
  aboutSection.style.display = 'block';   // Show About
});

homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  aboutSection.style.display = 'none';    // Hide About
  homeSection.style.display = 'flex';     // Show Home (was flex originally)
});