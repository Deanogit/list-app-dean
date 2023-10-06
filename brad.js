const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  //   Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));
  li.classList =
    'flex justify-between items-center py-3 px-4 text-xl font-semibold tracking-wide border border-slate-400 bg-slate-100 rounded-md drop-shadow-md';

  //   Create button
  const button = createButton('flex remove-item btn-link');

  // append button to li
  li.appendChild(button);
  // append li to DOM (perhaps this is where I'm making my mistakes, trying to append to the html instead of the dom...?)
  itemList.appendChild(li);

  itemInput.value = '';
}

// Create Button
function createButton(classes) {
  const button = document.createElement('button');
  button.classList = classes;
  button.innerHTML = `<ion-icon name="close" class="w-7 h-7"></ion-icon>`;
  return button;
}

////////////// couldnt find a way to get the name="close" into the ion-icon element, so used innerHTML in the createButton()
//////////////
// Create Icon
// function createIcon(classes, names) {
//   const icon = document.createElement('ion-icon');
//   icon.classList = classes;
//   icon.name = names;
//   return icon;
// }
/////////////

// Event Listeners
itemForm.addEventListener('submit', addItem);
