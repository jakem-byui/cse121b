/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Jake Matheson";

let currentYear = new Date(year);

let profilePicture = 'images/profile-pic.png';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");



/* Step 4 - Adding Content */

nameElement.innerHTML = '<strong>${fullName}</strong>';


yearElement.textContent = currentYear;



/* Step 5 - Array */

let favoriteFood = ["Chicken Tenders", "Fried Rice", "Banana Cake"];

foodElement.textContent = favoriteFood;

let favoriteFood2 = ["Grilled Tuna Sandwich"];




