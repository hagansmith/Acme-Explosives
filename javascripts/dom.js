"use strict";
// --- Write the categories to the DOM selector --- //
let categoryDiv = $('#category-selector');
let prodDiv = $("#prodTable");

const categorySelect = function(category) {
  let domString = '';
      domString +=   `<option id="${category.name}" value="${category.id}">${category.name}</option>`;
	printToDom(domString);
};

const printToDom = function(string) {
	categoryDiv.append(string);
};

// --- Write the selected products and their info to the DOM --- //
const productsDom = function(items) {
  let prodString = '';
  for (let i = 0; i < items.length; i ++) {
    let keys = Object.keys(items[i]);
    let fullProduct = items[i][keys];
      prodString += `<tr class="item ${fullProduct.categoryID} hidden">`;
      prodString += `<td>${fullProduct.name}</td>`;
      prodString += `<td id="${fullProduct.categoryID}">${fullProduct.category}</td>`;
      prodString += `<td>${fullProduct.typeName}</td>`;
      prodString += `<td>${fullProduct.description}</td>`;
      prodString += `</tr>`;
  }
  printProducts(prodString);
};

const printProducts = function(prodString){
  prodDiv.append(prodString);
};


module.exports = {categorySelect, productsDom};
