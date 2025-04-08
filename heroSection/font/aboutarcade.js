// JavaScript file: script.js

window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
      console.log('Mobile layout');
      // You can add any dynamic changes needed for mobile here
    } else if (window.innerWidth < 1024) {
      console.log('Tablet layout');
      // You can add any dynamic changes needed for tablet here
    } else {
      console.log('Desktop layout');
      // You can add any dynamic changes needed for desktop here
    }
  });
  
  // On load, adjust based on initial screen size
  window.addEventListener('load', function() {
    if (window.innerWidth < 768) {
      console.log('Initial load: Mobile layout');
      // Mobile specific adjustments on load
    }
  });
  
