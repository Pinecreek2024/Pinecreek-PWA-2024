// menuTypes.ts

export interface MenuItem {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    // Add any other fields that your menu items might have
  }
  
  // If your menu items are categorized, you might also want to define a category type
  export interface MenuCategory {
    id: number;
    name: string;
    items: MenuItem[];
  }
  