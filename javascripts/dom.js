"use strict";
// --- Write the categories to the DOM selector --- //
var categoryDiv = $('#category-selector');

var categorySelect = function(category) {
  var domString = '';
      domString +=   `<option value="${category.name}">${category.name}</option>`;
	printToDom(domString);
};

var printToDom = function(string) {
	categoryDiv.append(string);
};

// --- Write the selected products and their info to the DOM --- //



module.exports = categorySelect;
