// productTypes.ts

export interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Detailed description of the product
    price: number; // Price of the product
    imageUrl: string; // URL of the product image
    category: string; // Category to which the product belongs
    stockQuantity: number; // Quantity of the product in stock
    // Additional properties such as size, color, etc., can be added as needed
  }
  