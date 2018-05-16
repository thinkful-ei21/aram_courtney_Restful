/* global shoppingList, store, $, Item */

'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

$.getJSON('https://thinkful-list-api.herokuapp.com/aram/items', (response) => {
  console.log('api response:', response);
});
