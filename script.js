import { products } from "./data.js";

import {
    formatPrice,
    getProductLabel,
    calculateTotal,
    createProductSummary
} from "./helpers.js";

// Spread operator: copy original array.
const copiedProducts = [...products];

// Add new product without changing original data.
const extraProduct = {
    id: 9,
    name: "USB Cable",
    category: "Accessories",
    price: 300,
    description: "Durable USB cable for everyday use.",
    featured: false
};

const updatedProducts = [...copiedProducts, extraProduct];

// Combine two arrays using spread.
const additionalProducts = [
    {
        id: 10,
        name: "Webcam",
        category: "Electronics",
        price: 3500,
        description: "HD webcam for video calls.",
        featured: false
    }
];

const allProducts = [...updatedProducts, ...additionalProducts];

// Array destructuring.
const [firstProduct, secondProduct] = allProducts;

// Object destructuring.
const {
    name: firstProductName,
    price: firstProductPrice
} = firstProduct;

console.log(firstProductName, firstProductPrice);
console.log(secondProduct.name);

// DOM elements.
const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const productCount = document.getElementById("productCount");
const totalPrice = document.getElementById("totalPrice");
const emptyMessage = document.getElementById("emptyMessage");
const resetBtn = document.getElementById("resetBtn");
const featuredProduct = document.getElementById("featuredProduct");

let filteredProducts = [...allProducts];

// Load categories.
function loadCategories() {
    const categories = [
        ...new Set(allProducts.map(({ category }) => category))
    ];

    categories.forEach(category => {
        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);
    });
}

// Render featured product.
function renderFeaturedProduct() {
    const product = allProducts.find(({ featured }) => featured);

    if (!product) {
        featuredProduct.textContent = "No featured product found.";
        return;
    }

    const { name, category, price, description } = product;

    const card = document.createElement("article");
    card.className = "featured-card";

    const badge = document.createElement("span");
    badge.className = "featured-badge";
    badge.textContent = "Featured Product";

    const title = document.createElement("h3");
    title.textContent = name;

    const categoryText = document.createElement("p");
    categoryText.textContent = category;

    const priceText = document.createElement("p");
    priceText.className = "price";
    priceText.textContent = formatPrice(price);

    const descriptionText = document.createElement("p");
    descriptionText.textContent = description;

    card.append(badge, title, categoryText, priceText, descriptionText);
    featuredProduct.replaceChildren(card);

    console.log(createProductSummary(product));
}

// Render product cards safely.
function renderProducts(productList) {
    productContainer.replaceChildren();

    productList.forEach(({ name, category, price, description }) => {
        const card = document.createElement("article");
        card.className = "product-card";

        const title = document.createElement("h3");
        title.textContent = name;

        const categoryText = document.createElement("span");
        categoryText.className = "category";
        categoryText.textContent = category;

        const priceText = document.createElement("p");
        priceText.className = "price";
        priceText.textContent = formatPrice(price);

        const descriptionText = document.createElement("p");
        descriptionText.className = "description";
        descriptionText.textContent = description;

        card.append(title, categoryText, priceText, descriptionText);
        productContainer.appendChild(card);
    });

    productCount.textContent =
        `Showing ${productList.length} of ${allProducts.length} products`;

    const selectedPrices = productList.map(({ price }) => price);

    totalPrice.textContent =
        `Total Price: ${formatPrice(calculateTotal(...selectedPrices))}`;

    emptyMessage.hidden = productList.length !== 0;

    if (productList.length === 0) {
        emptyMessage.textContent =
            "No products found. Try another search or category.";
    }

    console.log(`Successfully displayed ${productList.length} products.`);
}

// Search, filtering and sorting.
function applyFilters() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedSort = sortFilter.value;

    let result = [...allProducts];

    result = result.filter(({ name }) =>
        name.toLowerCase().includes(searchText)
    );

    if (selectedCategory !== "all") {
        result = result.filter(({ category }) =>
            category === selectedCategory
        );
    }

    if (selectedSort === "low") {
        result.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "high") {
        result.sort((a, b) => b.price - a.price);
    }

    filteredProducts = result;
    renderProducts(filteredProducts);
}

// Reset filters.
function resetFilters() {
    searchInput.value = "";
    categoryFilter.value = "all";
    sortFilter.value = "default";

    applyFilters();
}

// Event listeners.
searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);
resetBtn.addEventListener("click", resetFilters);

// Initialize application.
function init() {
    loadCategories();
    renderFeaturedProduct();
    applyFilters();

    console.log("Product Catalog loaded successfully!");
    console.log(getProductLabel(firstProduct));
}

// Run after HTML is loaded.
document.addEventListener("DOMContentLoaded", init);