const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

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

  // Append li to dom
  itemList.appendChild(li);

  //   clear the item input field
  // NB: clear the document.itemInput not the newItem variable!!
  itemInput.value = '';
}

// // Global reusable functions

// createButton(classes)
function createButton(classes) {
  const button = document.createElement('button');
  button.classList = classes;
  button.innerHTML = `<ion-icon name="close" class="w-7 h-7"></ion-icon`;
  return button;
}

// // Event Listener
itemForm.addEventListener('submit', addItem);
