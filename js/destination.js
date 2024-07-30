// Select all navigation list items
const links = document.querySelectorAll(".navigation li");

// Select the elements where data will be displayed
let image = document.querySelector(".image");
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let distance = document.querySelector(".distance");
let travel = document.querySelector(".travel");

// Array to hold the destination data
let elements = [];

// Fetch the data from the provided URL
fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  .then((res) => res.json()) // Convert the response to JSON
  .then((data) => {
    // Iterate over each destination and push it to the elements array
    for (let i = 0; i < data.destinations.length; i++) {
      elements.push(data.destinations[i]);
    }
  });

// Add click event listeners to each navigation link
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default action of the link

    // Remove 'active' class from all links
    links.forEach((link) => {
      link.classList.remove("active");
    });

    // Add 'active' class to the clicked link
    link.classList.add("active");

    // Update the displayed data based on the clicked link
    switch (e.target.innerText) {
      case "Moon":
        // Update elements with Moon data
        image.src = elements[0].images.webp;
        name.innerText = elements[0].name;
        description.innerText = elements[0].description;
        distance.innerText = elements[0].distance;
        travel.innerText = elements[0].travel;
        break;

      case "Mars":
        // Update elements with Mars data
        image.src = elements[1].images.webp;
        name.innerText = elements[1].name;
        description.innerText = elements[1].description;
        distance.innerText = elements[1].distance;
        travel.innerText = elements[1].travel;
        break;

      case "Europa":
        // Update elements with Europa data
        image.src = elements[2].images.webp;
        name.innerText = elements[2].name;
        description.innerText = elements[2].description;
        distance.innerText = elements[2].distance;
        travel.innerText = elements[2].travel;
        break;

      case "Titan":
        // Update elements with Titan data
        image.src = elements[3].images.webp;
        name.innerText = elements[3].name;
        description.innerText = elements[3].description;
        distance.innerText = elements[3].distance;
        travel.innerText = elements[3].travel;
        break;

      default:
        // Do nothing if the clicked link doesn't match any case
        break;
    }
  });
});
