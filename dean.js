// // These are in the global scope
const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const filter = document.querySelector('.filter');
// // this cant be here, we need it defined inside the function, not in the global scope, so it checks how many li(s) there are inside the ul when the function is called!
// const items = itemList.querySelectorAll('li');

/////////////////////////////////////////////////////////
// // 1. Add Items to the list via form input
function addItem(e) {
  e.preventDefault();

  // Take the value of itemInput and store it in a variable so it can be used later
  const newItem = itemInput.value;

  // Validate Input
  // check if there is a value added before adding a new li to the ul
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  //   append a text node with newItem as argument
  li.appendChild(document.createTextNode(newItem));
  //   add the classes
  li.classList =
    'flex justify-between items-center py-3 px-4 text-xl font-semibold tracking-wide border border-slate-400 bg-slate-100 rounded-md drop-shadow-md';

  // Create Button by using a createButton function declared in the global scope, using the classes as arguments
  const button = createButton('flex remove-item btn-link');

  //   Append button to li
  li.appendChild(button);

  // Append li to DOM
  itemList.appendChild(li);

  // Check if there are any li(s)
  checkUI();

  //   clear the item input field
  // NB: clear the document.itemInput not the newItem variable!!
  itemInput.value = '';
}

/////////////////////////////////////////////////////////
// // 2. Remove li items when close btn clicks
// // Tip: use event delegation, put the event on the itemList
function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    // console.log('click');
    // so how do I get the li item now, loop through the ul..? If ul[i] === e.target.parentElement.classList.contains('remove-item) then {ul[i]remove()}
    // Do i need a new variable?
    // Nah just use parentElement.parentElement.remove() like I did initially :)
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
}

///////////////////////// 2. Continued, removeAllItems()
// // checks if itemList has a first child, if it does, remove the firstchild, repeat until there are no more firstChilds
function removeAllItems() {
  if (confirm('Delete all items?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    checkUI();
  }
}

/////////////////////////////////////////////////////
// // 3. If there are no items in the list, remove clear all btn and filter items

// // this could be done when the page loads (remove all the items in the HTML) check if ul.childElement is NOT true, if NOT true, hide filter and clear all btn

// Create a function to check the UI, this can be called at specific times...

// // Global reusable functions

// createButton(classes)
function createButton(classes) {
  const button = document.createElement('button');
  button.classList = classes;
  button.innerHTML = `<ion-icon name="close" class="w-7 h-7"></ion-icon`;
  return button;
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
// // Event Listener
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', removeAllItems);

//  // Global Scope, runs on load:
checkUI();
