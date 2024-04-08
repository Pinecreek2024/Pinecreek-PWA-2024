// Define a type for individual menu items
export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string; // Can be an enum if you have predefined categories
    imageUrl?: string; // Optional property for an image URL
    // Add any other relevant properties here
  }
  
  // If you have predefined categories, you can define them as an enum
  export enum MenuCategory {
    Appetizer = "Appetizer",
    MainCourse = "Main Course",
    Dessert = "Dessert",
    Beverage = "Beverage",
    // Add more categories as needed
  }
  