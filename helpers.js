export function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);
}

export function getProductLabel({ name, category }) {
    return `${name} - ${category}`;
}

export function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

export function createProductSummary({ name, price, category }) {
    return `${name} belongs to ${category} and costs ${formatPrice(price)}.`;
}