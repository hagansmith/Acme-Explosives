# Acme-Explosives

## Synopsis

Acme explosives is an exercise in using javascript promises to asynchronously load data from json files.

## What to Expect

Upon page load the user is presented with a selector to display products by category. When a category is selected only the items in that category are displayed.

![DEMO](https://github.com/hagansmith/Acme-Explosives/blob/master/Demo.gif)

## Requirements

You are going to be creating several JSON files that will be describing all of the explosive products that you sell. You need to use Promises to handle the order of the asynchronous operations needed to load the data.

### Product Categories

Choose at least two, but as many of you like, categories for your products. Give each one an integer unique id.

Here's an example.

##### categories.json

```js
{
    "categories": [
        {
            "id": 0,
            "name": "Fireworks"
        },
        {
            "id": 1,
            "name": "Demolition"
        }
    ]
}
```

### Product Types

Create a JSON file describing types **for each** category of your products. For each type, add a key/value pair that creates a relationship to the corresponding category. Create at least 3 types for each category.

##### types.json

```js
{
    "types": [
        {
            "id": 0,
            "category": 0,
            "name": "personal",
            "description": "Fireworks intended for recreational use during holiday celebrations"
        }
    ]
}
```

### Product Details

Create a JSON file describing each product you offer. Add a key/value pair that creates a relationship to the appropriate product type. Add at least 3 products for each type.

##### products.json

```js
{
    "products": [{
        "fairy_sparklers": {
            "id": 0,
            "type": 0,
            "name": "Fairy Sparklers",
            "description": "Multi-colored sparklers that are safe for any age."
        }
    }]
}
```


### User interface

Create a simple user interface for your product catalog where a user can select a category from a dropdown. When a category is selected, you must use Promises to read, first, from the `categories.json` to load that array of objects, then load `types.json`, then `products.json`.

Once all data is loaded, you need to display the products in a Bootstrap grid. Each product must display the string name of its product type, and product category. Not the integer id value.

### Tools Used:
- Browserify
- Grunt
- jQuery (DOM methods, AJAX)
- Linting
- Bootstrap

### How to run (Node must be installed on your machine):
1. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8080`  
3. This will show at: `http://localhost:8080` in your internet browser.

```
git clone git@github.com:hagansmith/Acme-Explosives.git
cd Acme-Explosives
npm install http-server -g
hs -c-1
cd Ad/lib
npm install
```
Navigate to: http://localhost:8080
