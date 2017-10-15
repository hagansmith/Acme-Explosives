"use strict";

var dom = require('./dom');

var fireworks = [];

var categories = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./data/categories.json').done(function(data1){
			resolve(data1.categories);
      categoriesDom(data1.categories);
		}).fail(function(error1){
			reject(error1);
		});
	});
};

var products = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./data/products.json').done(function(data2){
			resolve(data2.products);
		}).fail(function(error2){
			reject(error2);
		});
	});
};

var types = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./data/types.json').done(function(data3){
			resolve(data3.types);
		}).fail(function(error3){
			reject(error3);
		});
	});
};

var fireworksGetter = function(){
	Promise.all([categories(), products(), types()]).then(function(results){
		results.forEach(function(result){
      result.forEach(function(firework){
        fireworks.push(firework);
			});
		});
		//makeBigBoom();
	}).catch(function(error){
		console.log("error from Promise.all", error);
	});
};

var categoriesDom = function(thing){
	thing.forEach(function(cat){
		dom(cat);
	});
};

var initializer = function(){
	fireworksGetter();
};

var getFireworks = function(){
	return fireworks;
};

module.exports = {initializer, getFireworks};
