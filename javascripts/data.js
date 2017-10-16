"use strict";

var dom = require('./dom');
var fireworks = [];


// --- PROMISES --- //
var categories = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./data/categories.json').done(function(data1){
			resolve(data1);
      categoriesDom(data1.categories);
		}).fail(function(error1){
			reject(error1);
		});
	});
};

var products = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./data/products.json').done(function(data2){
			resolve(data2);
		}).fail(function(error2){
			reject(error2);
		});
	});
};

var types = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./data/types.json').done(function(data3){
			resolve(data3);
		}).fail(function(error3){
			reject(error3);
		});
	});
};

// --- Promise Calls --- //
var categoriesGetter = function(){
	categories();
};

// Use the selection to filter results and initiate data call
const dataFilter = (input) => {
	Promise.all([categories(), types(), products()]).then((results) => {
		results[0].categories.forEach(function(category){
			//if (category.name === input) {
			results[1].types.forEach(function(type){
				if (category.id === type.category) {
					type.catName = category.name;}
					console.log(type);
				results[2].products.forEach(function(product){
					console.log(product);
					//product.forEach(function(item){
					//console.log(item);

					if (product.type === type.id) {
						product.typeName = type.name;
						product.category = type.catName;
					}
						//console.log(product);
					//});
				});
			});
		});
	});
};


// 	let productArray=[];
// 	categories().then(function(result){
// 		 result.forEach(function(category){
// 			 if (category.name === input) {
// 				 productArray.push(category);
// 			 }
// 		});
// 	}).then(types().then(function(productArray){
// 		console.log('types',types);
// 	}));
// 	console.log('final product array', productArray);
// };
	//call write to dom table

// --- DOM Functions --- //
var categoriesDom = function(thing){
	thing.forEach(function(cat){
		dom(cat);
	});
};

// Write to Dom table
	//write the products to the dom

// --- Master Functions --- //
var initializer = function(){
	categoriesGetter();
};

var getFireworks = function(){
	return fireworks;
};

module.exports = {initializer, getFireworks, dataFilter};
