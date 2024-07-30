// Select all dot elements from the DOM
const dots = document.querySelectorAll(".dots .dot");

// Select the DOM elements where role, name, bio, and image will be displayed
let role = document.querySelector(".role");
let name = document.querySelector(".name");
let bio = document.querySelector(".bio");
let image = document.querySelector(".image");

// Initialize an empty array to hold crew data
let elements = [];

// Fetch data from the provided JSON URL
fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  .then((res) => res.json()) // Convert the response to JSON
  .then((data) => {
    // Populate the elements array with crew data from the JSON
    for (let i = 0; i < data.crew.length; i++) {
      elements.push(data.crew[i]);
    }
  });

// Add click event listener to each dot
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    // Remove 'active' class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    
    // Add 'active' class to the clicked dot
    dot.classList.add("active");
    
    // Update role, name, bio, and image based on the clicked dot's data
    role.innerText = elements[dot.dataset.num - 1].role;
    name.innerText = elements[dot.dataset.num - 1].name;
    bio.innerText = elements[dot.dataset.num - 1].bio;
    image.src = elements[dot.dataset.num - 1].images.webp;
  });
});

