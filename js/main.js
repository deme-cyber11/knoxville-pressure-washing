// Mobile Navigation Toggle
(function() {
  var toggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  var header = document.querySelector('.header');
  
  if (!toggle || !navLinks) return;
  
  toggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', 
      toggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  });
  
  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Close menu on outside click
  document.addEventListener('click', function(e) {
    if (!header.contains(e.target)) {
      navLinks.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Dropdown toggles on mobile
  document.querySelectorAll('.nav-dropdown > a').forEach(function(trigger) {
    trigger.addEventListener('click', function(e) {
      if (window.innerWidth < 769) {
        e.preventDefault();
        var parent = this.parentElement;
        parent.classList.toggle('open');
      }
    });
  });
})();
