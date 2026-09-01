let product = {
    productId: 101,
    productName: "Laptop",
    price: 50000,
    quantity: 2,

    totalPrice: function () {
        return this.price * this.quantity;
    },

    updateQuantity: function (newQuantity) {
        this.quantity = newQuantity;
    },

    displayDetails: function () {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
        console.log("Quantity:", this.quantity);
        console.log("Total Price:", this.totalPrice());
    }
};

product.displayDetails();

console.log("After updating quantity:"); //after updating quantity

product.updateQuantity(3);
product.displayDetails();
