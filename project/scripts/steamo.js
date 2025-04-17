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



const apiKey = "5d111ba87c30a99edebf119792b1ef51"; // Default OpenWeatherMap API Key
const lat = 4.837430; // Latitude
const lon = 7.011537; // Longitude
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weatherInfo = `
      Location: ${data.name} <br>
      Weather: ${data.weather[0].description} <br>
      Temperature: ${data.main.temp}°C <br>
      Humidity: ${data.main.humidity}% <br>
      Wind Speed: ${data.wind.speed} m/s
    `;
    document.getElementById("weather-info").innerHTML = weatherInfo;
  })
  .catch((error) => {
    document.getElementById("weather-info").textContent =
      "Error fetching weather data.";
    console.error("Weather API Error:", error);
  });

// JavaScript
document.getElementById("getJoke").addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("jokeDisplay").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(err => console.error("Error fetching joke:", err));
});


document.getElementById("getJoke").addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      const jokeEl = document.getElementById("jokeDisplay");
      jokeEl.textContent = `${data.setup} - ${data.punchline}`;

      // Trigger animation
      jokeEl.classList.remove("explode"); // Reset animation
      void jokeEl.offsetWidth; // Trigger reflow
      jokeEl.classList.add("explode");
    })
    .catch(err => console.error("Error fetching joke:", err));
});




// steamo.js

// FOR FORM FOR PRODUCT REVIEW is under preview.js to stay on it's own

