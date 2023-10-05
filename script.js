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
});

/////////////////////////////////////////////////////////
// // 1. Add Items to the list via forms

// create a new list item
// create a new button
// create a new ion-icon

// append icon to button
// append button to li
// append li to ul

/////////////////////////////////////////////////////////
// // 2. Remove li items when close btn clicks
// // Kind of works for removing the li items when close btn is clicked!
closeBtns.forEach((close) => {
  close.addEventListener('click', (e) => {
    console.log('Close!', e.target, e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  });
});

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
