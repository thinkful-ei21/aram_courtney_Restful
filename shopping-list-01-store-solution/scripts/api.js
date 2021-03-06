'use strict';
/* global $ */

const api = (function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/aram';

  const getItems = function (callback) {

    $.getJSON(BASE_URL + '/items', callback);
  };

  const createItem = function (name, callback) {
    let newItem = JSON.stringify({
      name: name,
    });

    $.ajax({
      url: BASE_URL + '/items',
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,

    });
  };

  const updateItem = function(id, updateData, callback) {

    $.ajax({


    });
  };

  return {
    getItems: getItems,
    createItem: createItem,
    updateItem: updateItem
  };

}());