"use strict";

let dom = require('./dom');

// --- PROMISES --- //
let categories = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./data/categories.json').done(function(data1){
			resolve(data1);
		}).fail(function(error1){
			reject(error1);
		});
	});
};

let products = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./data/products.json').done(function(data2){
			resolve(data2);
		}).fail(function(error2){
			reject(error2);
		});
	});
};

let types = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./data/types.json').done(function(data3){
			resolve(data3);
		}).fail(function(error3){
			reject(error3);
		});
	});
};


//Use the selection to filter results and initiate data call
const productsToDom = () => {
	Promise.all([categories(), types(), products()]).then((results) => {
		 let categories = results[0].categories;
		 categoriesDom(categories);
		 let types = results[1].types;
		 let products = results[2].products;
		categories.forEach((category) => {
			types.forEach((type) => {
	 			if (category.id === type.category) {
					type.catName = category.name;
					type.categoryID = category.id;
	 			}
				products.forEach(function(product){
					let key = Object.keys(product);
					let fullProduct = product[key];
					if (fullProduct.type === type.id) {
						fullProduct.typeName = type.name;
						fullProduct.category = type.catName;
						fullProduct.categoryID = type.categoryID;
					}
				});
	 		});
		});
			dom.productsDom(products);
	});
};

// --- DOM Functions --- //
let categoriesDom = function(thing){
	thing.forEach(function(cat){
		dom.categorySelect(cat);
	});
};

let dataFilter = function (event) {
	$(`.item`).addClass('hidden');
	$(`.${event}`).removeClass('hidden');
};

// --- Master Functions --- //
const initializer = function(){
	productsToDom();
};

module.exports = {initializer, dataFilter};
