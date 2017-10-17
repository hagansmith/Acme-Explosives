"use strict";

let dom = require('./dom');
let fireworks = [];


// --- PROMISES --- //
let categories = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./data/categories.json').done(function(data1){
			resolve(data1);
      categoriesDom(data1.categories);
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

// --- Promise Calls --- //
let categoriesGetter = function(){
	categories();
};

//Use the selection to filter results and initiate data call
const dataFilter = (input) => {
	Promise.all([categories(), types(), products()]).then((results) => {
		results[0].categories.forEach(function(category){
			results[1].types.forEach(function(type){
				if (category.id === type.category) {
					type.catName = category.name;
				}
				results[2].products.forEach(function(product){
					let key = Object.keys(product);
					let fullProduct = product[key];
					if (fullProduct.type === type.id) {
						fullProduct.typeName = type.name;
						fullProduct.category = type.catName;
					}

					if (fullProduct.category === input) {
						dom.productsDom(fullProduct);
					}

				});
			});
		});
	});
};

	//call write to dom table

// --- DOM Functions --- //
let categoriesDom = function(thing){
	thing.forEach(function(cat){
		dom.categorySelect(cat);
	});
};

let productDom = function(products){

};

// --- Master Functions --- //
const initializer = function(){
	categoriesGetter();
};

const getFireworks = function(){
	return fireworks;
};

module.exports = {initializer, getFireworks, dataFilter};
