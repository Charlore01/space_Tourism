// Select all buttons with the class 'num' within the '.enumirate' container
const btns = document.querySelectorAll(".enumirate .num");

// Select elements to display the name, description, and image
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let image = document.querySelector(".image");

// Initialize an empty array to store data and variables to keep track of current index and image orientation
let allData = [];
let num = 0;
let img = "";

// Fetch data from the provided JSON URL
fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  .then((res) => res.json())
  .then((data) => {
    // Populate the allData array with the technology data from the JSON
    for (let i = 0; i < data.technology.length; i++) {
      allData.push(data.technology[i]);
    }
  });

// Immediately invoked function expression (IIFE) to handle window resizing and load events
(function () {
  // Event listener for window resize
  window.onresize = displayWindowSize;
  
  // Event listener for window load
  window.onload = displayWindowSize;

  // Function to determine the window size and update image source accordingly
  function displayWindowSize() {
    let myWidth = window.innerWidth;

    // Check if the window width is 1100px or greater
    if (myWidth >= 1100) {
      img = "portrait";
    } else {
      img = "landscape";
    }

    // Update the image source based on the current 'img' variable and the selected data
    image.src = allData[num].images[img];
  }
})();

// Add click event listeners to each button
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add 'active' class to the clicked button
    btn.classList.add("active");

    // Update the index based on the button's text content (assumed to be a number)
    num = btn.innerText - 1;

    // Update the displayed name, description, and image based on the selected data
    name.innerText = allData[num].name;
    description.innerText = allData[num].description;
    image.src = allData[num].images[img];
  });
});
