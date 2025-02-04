var sides = [
  'Garden Salad',
  'Caeser Salad',
  'Hush Puppies',
  'Garlic Mushrooms',
  'Mashed Potatoes and Gravy',
  'Greenbeans',
  'Coleslaw',
  'Homestyle Fried Potatoes',
  'Chili Cheese Tots',
  'Rice',
  'Summer Rolls',
  'Baked Creamcheese Peppers',
  'Herb Blend Stuffing'
]

var mains = [
  'BBQ Bacon Burgers',
  'Chicken Fried Rice',
  'Homemade Ramen',
  'Eggrolls',
  'Shepards Pie',
  'Bibimbap',
  'Chicken Parmesean',
  'Baked Potatoe Soup',
  'Empanadas',
  'Lemon Pepper Chicken',
  'Fajitas',
  'Spaghetti and Meatballs',
  'BYO Pizza'
];

var desserts = [
  'Macaroons',
  'Lemon Meringue Pie',
  'Pumpkin Pie',
  'Funfetti Cake',
  'Peach Cobbler',
  'Cheesecake',
  'Baklava',
  'Flan',
  'Macarons',
  'Pinapple Upside Down Cake',
  'Apple Pie',
  'Chocolate Cupcakes',
  'Pavlova',
  'Banana Bread',
  'Key Lime Pie',
  'Orange Dream Bunt Cakes',
  'Eclairs'
];

//Variables
var letsCookBtn = document.querySelector('.letsCookBtn');
var addRecipeBtn = document.querySelector('.addRecipeBtn');
var clearBtn = document.getElementById('clearBtn');
var sideInput = document.getElementById('side');
var mainDishInput = document.getElementById('mainDish');
var dessertInput = document.getElementById('dessert');
var entireMealInput = document.getElementById('entireMeal');
var food = document.getElementById('foodtxt');
var pot = document.getElementById('cookPot');
var youShouldMake = document.getElementById('maketxt');

//Event Listeners
letsCookBtn.addEventListener('click', showRandomDish);
addRecipeBtn.addEventListener('click', addRecipe);
clearBtn.addEventListener('click', clearText);

//Functions

function selectRandomFoodIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showRandomDish() {
  hideCookPot();
  showFood();
  if (sideInput.checked) {
    food.innerText = sides[selectRandomFoodIndex(sides)];
  } else if (mainDishInput.checked) {
    food.innerText = mains[selectRandomFoodIndex(mains)];
  } else if (dessertInput.checked) {
    food.innerText = desserts[selectRandomFoodIndex(desserts)];
  } else if (entireMealInput.checked) {
    food.innerText = `${mains[selectRandomFoodIndex(mains)]}, with ${sides[selectRandomFoodIndex(sides)]}, and ${desserts[selectRandomFoodIndex(desserts)]} for dessert!`;
  } else {
    alert('Please select an input');
    showCookPot();
    hideFood();
  }
};

function clearText() {
  hideFood();
  showCookPot();
};

function hideCookPot() {
  cookPot.classList.add('hidden')
};
function showCookPot() {
  cookPot.classList.remove('hidden');
};

function hideFood() {
  foodtxt.classList.add('hidden');
  maketxt.classList.add('hidden');
  clearBtn.classList.add('hidden');
};

function showFood() {
  foodtxt.classList.remove('hidden');
  maketxt.classList.remove('hidden');
  clearBtn.classList.remove('hidden');
};

function addRecipe() {
  alert('Sorry, this feature is under construction!')
};