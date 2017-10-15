"use strict";

var categoryDiv = $('#category-selector');

var categorySelect = function(category) {
  var domString = '';
      domString +=   `<option value=${category.name}>${category.name}</option>`;
	printToDom(domString);
};

var printToDom = function(string) {
	categoryDiv.append(string);
};

module.exports = categorySelect;
