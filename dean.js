// // These are in the global scope
const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const filterInput = document.querySelector('#filter');
// // this cant be here, we need it defined inside the function, not in the global scope, so it checks how many li(s) there are inside the ul when the function is called!
// const items = itemList.querySelectorAll('li');

/////////////////////////////////////////////////////////
// // // When page loads, get the items from localStorage
function displayLocalStorageItems() {
  // Call the getItemsFromStorage function and put into variable itemsFromStorage
  const itemsFromStorage = getItemsFromStorage();
  // Loop through the itemsFromStorage and addItemToDOM()
  itemsFromStorage.forEach((item) => addItemToDOM(item));

  // // Dont forget to check the UI again
  checkUI();
}

/////////////////////////////////////////////////////////
// // 1. Add Items to the list via form input
function onAddItemSubmit(e) {
  e.preventDefault();

  // Take the value of itemInput and store it in a variable so it can be used later
  const newItem = itemInput.value;

  // Validate Input
  // check if there is a value added before adding a new li to the ul
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // // create li has been moved to addItemToDOM() // //
  // // Create item DOM element
  addItemToDOM(newItem);

  // // Add item to localStorage
  addItemToStorage(newItem);

  // Check if there are any li(s)
  checkUI();

  //   clear the item input field
  // NB: clear the document.itemInput not the newItem variable!!
  itemInput.value = '';
}

function addItemToDOM(item) {
  // Create list item
  const li = document.createElement('li');
  //   append a text node with newItem as argument
  li.appendChild(document.createTextNode(item));
  //   add the classes
  li.classList =
    'flex justify-between items-center py-3 px-4 text-xl font-semibold tracking-wide border border-slate-400 bg-slate-100 rounded-md drop-shadow-md';

  // Create Button by using a createButton function declared in the global scope, using the classes as arguments
  const button = createButton('flex remove-item btn-link');

  //   Append button to li
  li.appendChild(button);

  // Append li to DOM
  itemList.appendChild(li);
}

/////////////////////////////////////////////////////////
function onClickItem(e) {
  // Check what was clicked on, button or list content
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  }
}

/////////////////////////////////////////////////////////
// // 2. Remove li items when close btn clicks
// // Tip: use event delegation, put the event on the itemList
function removeItem(item) {
  if (confirm('Are you sure?')) {
    // Remove item from DOM
    item.remove();

    // Remove item from storage
    removeItemFromStorage(item.textContent);

    checkUI();
  }
  // console.log(item);
  // if (e.target.parentElement.classList.contains('remove-item')) {
  //   // console.log('click');
  //   // so how do I get the li item now, loop through the ul..? If ul[i] === e.target.parentElement.classList.contains('remove-item) then {ul[i]remove()}
  //   // Do i need a new variable?
  //   // Nah just use parentElement.parentElement.remove() like I did initially :)
  //   if (confirm('Are you sure?')) {
  //     e.target.parentElement.parentElement.remove();
  //     checkUI();
  //   }
  // }
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  // // Filter out item to be removed, this higher order method, will return a new array less the item we want to remove
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
  // If its a match it will filter it from the array, otherwise it goes into the array

  // Now put the array back into localStorage, now that we've removed the item
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

///////////////////////// 2. Continued, removeAllItems()
// // checks if itemList has a first child, if it does, remove the firstchild, repeat until there are no more firstChilds
function removeAllItems() {
  if (confirm('Delete all items?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }

    // Clear from localStorage
    localStorage.removeItem('items');

    checkUI();
  }
}

/////////////////////////////////////////////////////
// // 3. If there are no items in the list, remove clear all btn and filter items

// // this could be done when the page loads (remove all the items in the HTML) check if ul.childElement is NOT true, if NOT true, hide filter and clear all btn

// Create a function to check the UI, this can be called at specific times...

/////////////////////////////////////////////////////////
// // 4. Filter the items by typing in the filter field
// // Build something that checks when something entered into the filter input,  if the filter input with the li(s)

function filterItems(e) {
  const text = e.target.value.toLowerCase();
  console.log(text);
  // check if input matches li items
  const items = document.querySelectorAll('li');

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    console.log(itemName);
    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }

    // if (item.textContent === text) {
    //   console.log('match!');

    //   // So i can get a match if the textContent matches the entire text word, so how do I loop through the
    // }
  });
}

// // Global reusable functions

// createButton(classes)
function createButton(classes) {
  const button = document.createElement('button');
  button.classList = classes;
  button.innerHTML = `<ion-icon name="close" class="w-7 h-7"></ion-icon`;
  return button;
}

/////////////////////////////////////////////////////////
// // // Local Storage

function addItemToStorage(item) {
  // Use the getItemsFromStorage function to create a variable to store anything that might already be in localStorage
  const itemsFromStorage = getItemsFromStorage();

  // Now that we've checked whats going on in the localStorage, we need to push the item being added, to the array
  itemsFromStorage.push(item);

  // Convert the array to JSON.stringify() and set to localStorage using the items key and itemsFromStorage as value
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  // Create a variable to store anything that might already be in localStorage
  let itemsFromStorage;

  // Check if there are any items in localStorage
  if (localStorage.getItem('items') === null) {
    // If null, create an empty array
    itemsFromStorage = [];
  }
  // Else get the items from localStorage (Dont forget to JSON.parse() the string! )
  else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemsFromStorage;
}

function checkUI() {
  const items = itemList.querySelectorAll('li');

  // console.log(items);
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    filter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    filter.style.display = 'block';
  }
}

// // 4. call global function
// This isnt necessary, the eventlistener will fire anytime something is input into the filterInput
// whichKey();

// // // Local Storage test

// // Key value pairs
// localStorage.setItem('name', 'Dean');
// localStorage.removeItem('name');
// localStorage.clear();

// // // Implement localStorage
// // 1. When an item is added, save to localStorage
// // 2. When an item is removed, remove from localStorage
// // 3. Load items when the page loads

// // // NB localStorage only stores strings, key - value pairs
// // // we need to put the list items in an array, then JSON.stringify this to put into localStorage
// // // When we need to access the array, we can JSON.parse to get it out of localStorage(stored as string) and put it back into an array so it can be rendered in the DOM

// // // // Initialize the app (in order to remove most addEventListeners from the global scope)
// // If you need something to happen right away, put it here in the init function

function init() {
  // // Event Listener
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', removeAllItems);

  // // 4. listen for keydown events in filter
  filterInput.addEventListener('input', filterItems);

  // // . Render localStorage items (if any) on page load
  document.addEventListener('DOMContentLoaded', displayLocalStorageItems);

  //  // Global Scope, runs on load:
  checkUI();
}

init();
