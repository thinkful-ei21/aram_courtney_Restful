/* global shoppingList, store, $, Item, api */

'use strict';

$(document).ready(function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

// store.items.push(Item.create('apples'));


// api.getItems(function (data) {
//   console.log(data);
// });

// console.log(api.BASE_URL);


// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });

api.getItems((items) => {
  items.forEach((item) => store.addItem(item));
  shoppingList.render();

  //Test
  const item = store.items[0];
  console.log('current name: ' + item.name);
  store.findAndUpdate(item.id, { name: 'foobar' });
  console.log('new name: ' + item.name);
});

api.getItems((items) => {
  const item = items[0];

  api.updateItem(item.id, { name: 'foobar' }, () => {
    console.log('updated!');
  });
});

