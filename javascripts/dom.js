"use strict";
// --- Write the categories to the DOM selector --- //
let categoryDiv = $('#category-selector');
let prodDiv = $("#prodTable");

const categorySelect = function(category) {
  let domString = '';
      domString +=   `<option value="${category.name}">${category.name}</option>`;
	printToDom(domString);
};

const printToDom = function(string) {
	categoryDiv.append(string);
};

// --- Write the selected products and their info to the DOM --- //
const productsDom = function(item) {
  let prodString = '';
  for (var key in item) {
  prodString += `<tr>`;
  prodString += `<td>${item.name}</td>`;
  prodString += `<td>${item.category}</td>`;
  prodString += `<td>${item.typeName}</td>`;
  prodString += `</tr>`;
  }
  printProducts(prodString);
};

const printProducts = function(prodString){
  prodDiv.append(prodString);
};


module.exports = {categorySelect, productsDom};
