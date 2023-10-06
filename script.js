const itemInput = document.querySelector('#item-input');
const addBtn = document.querySelector('.btn');
const itemForm = document.querySelector('#item-form');
const ul = document.querySelector('ul');
const clearAll = document.querySelector('#clear');

const closeBtns = document.querySelectorAll('button ion-icon[name="close"]');

itemInput.addEventListener('input', (e) => {
  e.preventDefault();
  console.log(e.target.value);
});

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Add');

  newLi('test');
});

/////////////////////////////////////////////////////////
// // 1. Add Items to the list via forms
const newLi = function (itemName) {
  // create a new list item
  const li = document.createElement('li');
  li.classList =
    'flex justify-between items-center py-3 px-4 text-xl font-semibold tracking-wide border border-slate-400 bg-slate-100 rounded-md drop-shadow-md';
  li.textContent = `${itemName}`;

  // create a new button
  const button = document.createElement('button');
  button.classList = 'flex';

  // create a new ion-icon
  const icon = document.createElement('ion-icon');
  icon.classList = 'w-7 h-7';
  icon.name = 'close';

  // append icon to button
  button.appendChild(icon);
  // append button to li
  li.appendChild(button);
  // append li to ul

  ul.appendChild(li);
};

/////////////////////////////////////////////////////////
// // 2. Remove li items when close btn clicks
// // Kind of works for removing the li items when close btn is clicked!

closeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target) closeLiBtn(e);
  });
});

const closeLiBtn = function (e) {
  e.target.parentElement.parentElement.remove();
};

/////////////////////////////////////////////////////////
// // 3. Clear all items with the "clear" button

// I can add an eventlistener to the clear all button, then loop through the firstchild of ul, removing each li, simples - I didn't find how to loop through the ul child elements, some syntax I didnt remember or some confusion.

// Ok so this listens for a click on the clear all button, and then calls the removeAll() function, which looks for all the li items and removes them!

clearAll.addEventListener('click', (e) => {
  console.log('clear All!');
  removeAll();

  //   I want to loop through all the childNodes
  //   console.log(ul.childNodes);
  //   ul.childNodes.remove();
  //   ul.innerHTML = '';

  //   ul.forEach((li) => {
  //     li.remove();
  //   });

  //   if (ul.childNodes) {
  //     ul.firstChild.remove();
  //   }
});

// function removeItem(itemNumber) {
//   const all = document.querySelectorAll('li');

//   all.forEach((item, index) => {
//     if (itemNumber === index) {
//       item[index].remove();
//     }
//   });
// }

function removeAll() {
  const all = document.querySelectorAll('li');
  all.forEach((item) => {
    item.remove();
  });
}

function removeEach() {
  const closeBtns = document.querySelectorAll('button ion-icon[name="close"]');
  closeBtns.forEach((close) => {
    if (close.target === btn.target) {
      btn.remove();
      return;
    }
  });
}

/////////////////////////////////////////////////////////
// // 4. Filter the items by typing in the filter field
/////////////////////////////////////////////////////////
// // 5. Add localStorage to persist items
/////////////////////////////////////////////////////////
// // 6. Click on an item to put into "edit mode" and add to form
/////////////////////////////////////////////////////////
// // 7. Update item
/////////////////////////////////////////////////////////
// // 8. Deploy to Netlify
