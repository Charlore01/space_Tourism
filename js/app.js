// Select the element that triggers the opening of the menu
const openMenu = document.querySelector(".open-menu");

// Select the element that triggers the closing of the menu
const closeMenu = document.querySelector(".close-menu");

// Select the navigation menu within the header
const menu = document.querySelector("header nav");

// Add an event listener to the openMenu element
// When clicked, it adds the 'active' class to the menu, making it visible
openMenu.addEventListener("click", () => {
  menu.classList.add("active");
});

// Add an event listener to the closeMenu element
// When clicked, it removes the 'active' class from the menu, hiding it
closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});
