// orderTypes.ts

export interface OrderItem {
    id: string; // Unique identifier for each item in the order
    name: string; // Name of the item
    price: number; // Price of the item
    quantity: number; // Quantity ordered
    // Include other relevant properties as needed
  }
  
  export interface Order {
    id: string; // Unique identifier for the order
    customerName: string; // Name of the customer who placed the order
    customerEmail: string; // Email of the customer
    items: OrderItem[]; // Array of items in the order
    totalAmount: number; // Total amount for the order
    orderDate: string; // Date when the order was placed
    status: 'pending' | 'confirmed' | 'delivered'; // Status of the order
    // Include other relevant properties as needed
  }
  