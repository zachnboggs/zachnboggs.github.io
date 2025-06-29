// Initialize AOS animations
AOS.init();

// Form submission handler
function submitForm(e) {
  e.preventDefault();
  document.getElementById('responseMsg').textContent = "Thanks for your message! I'll get back to you soon.";
  e.target.reset();
}

// JustValidate example
new window.JustValidate('.contact-form');

// Example Google Analytics snippet
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
