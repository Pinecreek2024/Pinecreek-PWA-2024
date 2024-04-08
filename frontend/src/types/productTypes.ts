// Basic structure for a product
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string; // Can be an enum if you have predefined categories
    imageUrl?: string; // Optional property for an image URL
    inStock: boolean;
    // Additional properties as needed, like size, color, etc.
  }
  
  // If you have predefined product categories, you can define them as an enum
  export enum ProductCategory {
    Electronics = "Electronics",
    Clothing = "Clothing",
    Food = "Food",
    Books = "Books",
    // Add more categories as needed
  }
  
  // Example of additional enums or types, like for sizes, colors, etc.
  export enum ProductSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    // etc.
  }
  
  // Feel free to add more types or interfaces as needed for your product structure
  