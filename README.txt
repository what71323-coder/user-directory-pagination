MODERN JAVASCRIPT PRODUCT CATALOG

PROJECT DESCRIPTION
-------------------
Product Catalog is a responsive web application built using HTML,
CSS and Modern JavaScript (ES6+).

FEATURES
--------
1. Product cards
2. Search products by name
3. Category filtering
4. Price sorting
5. Reset filters
6. Featured product
7. Product count
8. Total price calculation
9. Responsive layout

ES6+ FEATURES USED
------------------

1. TEMPLATE LITERALS
Template literals use backticks and ${} expressions.

Example:
const message = `Product price is ${price}`;

2. OBJECT DESTRUCTURING
Extracts properties from objects.

Example:
const { name, price } = product;

3. ARRAY DESTRUCTURING
Extracts values from arrays.

Example:
const [first, second] = products;

4. SPREAD OPERATOR
Expands values from arrays.

Example:
const copiedProducts = [...products];

5. REST PARAMETER
Collects multiple arguments into an array.

Example:
function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

6. SPREAD VS REST
Spread expands values.
Rest collects values.
Both use three dots (...).

7. JAVASCRIPT MODULES
data.js exports product data.
helpers.js exports reusable functions.
script.js imports data and helper functions.

8. ARRAY METHODS
filter() filters products.
map() extracts prices.
forEach() renders products.
reduce() calculates total.
sort() sorts products.

9. DOM MANIPULATION
JavaScript updates product cards dynamically.
Event listeners handle search and filters.
textContent displays text safely.

HOW TO RUN
-----------
1. Open the folder in VS Code.
2. Install Live Server.
3. Right-click index.html.
4. Select Open with Live Server.
5. Test search, filters and sorting.

IMPORTANT
---------
Use a local development server.
Do not open index.html directly using file://.