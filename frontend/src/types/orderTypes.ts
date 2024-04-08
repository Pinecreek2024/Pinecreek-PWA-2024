// Basic structure for an individual order item
export interface OrderItem {
    itemId: string;
    name: string;
    quantity: number;
    price: number;
  }
  
  // Order status - can be expanded or modified as needed
  export enum OrderStatus {
    Pending = "Pending",
    Processing = "Processing",
    Completed = "Completed",
    Cancelled = "Cancelled",
  }
  
  // Main order structure
  export interface Order {
    id: string;
    items: OrderItem[];
    totalAmount: number;
    customerName: string;
    customerEmail: string;
    status: OrderStatus;
    orderDate: Date; // or string if using ISO format
    deliveryAddress?: string; // Optional field for delivery address
    // Any additional fields relevant to an order
  }
  
  // If you have any additional types or enums related to orders, define them here
  