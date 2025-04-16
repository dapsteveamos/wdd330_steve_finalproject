// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    // Toggle hamburger text based on menu state
    hamburger.textContent = navMenu.classList.contains('open') ? 'X' : '☰';
});

// Close the menu when a navigation link is clicked
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.textContent = '☰'; // Reset to hamburger icon
    });
});

// JavaScript to change header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Change 50 to the scroll distance where the change should happen
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// drop down 
// Dropdown toggle for mobile
// document.querySelectorAll('.dropdown > a').forEach(parentLink => {
//     parentLink.addEventListener('click', (e) => {
//         const dropdownContent = parentLink.nextElementSibling; // Get the dropdown menu
//         if (dropdownContent) {
//             e.preventDefault(); // Prevent the default link behavior
//             dropdownContent.classList.toggle('open'); // Toggle the dropdown
//         }
//     });
// });

// Toggle dropdown on arrow click
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        const dropdown = e.target.closest('.dropdown'); // Get the closest dropdown
        const content = dropdown.querySelector('.dropdown-content'); // Dropdown content
        const arrow = dropdown.querySelector('.dropdown-toggle'); // Dropdown arrow

        // Toggle dropdown visibility
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';

        // Toggle arrow rotation
        arrow.classList.toggle('open', !isOpen);
    });
});

// Whatsapp
// document.getElementById("whatsapp-icon").addEventListener("click", function () {
//     const messageBox = document.getElementById("message-box");
//     if (messageBox.style.display === "none" || messageBox.style.display === "") {
//       messageBox.style.display = "block";
//     } else {
//       messageBox.style.display = "none";
//     }
//   });
document.getElementById("whatsapp-icon").addEventListener("click", function () {
    const messageBox = document.getElementById("message-box");
    messageBox.style.display = messageBox.style.display === "none" || messageBox.style.display === "" ? "block" : "none";
  });
  
  document.getElementById("send-button").addEventListener("click", function () {
    const message = document.getElementById("message-input").value;
    if (message.trim() !== "") {
      const phoneNumber = "2349166577130"; // Your WhatsApp number
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    } else {
      alert("Please enter a message before sending.");
    }
  });
  
  


// steamo.js

// FOR FORM FOR PRODUCT REVIEW is under preview.js to stay on it's own

