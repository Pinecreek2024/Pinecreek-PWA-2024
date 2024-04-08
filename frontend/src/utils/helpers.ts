/**
 * Utility functions commonly used across the application.
 */

// Format date to a readable string
export const formatDate = (date: Date): string => {
    return date.toLocaleDateString(); // Modify to use more complex date formatting if needed
  };
  
  // Capitalize the first letter of a string
  export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // Function to safely parse JSON
  export const safeJsonParse = <T>(str: string): T | null => {
    try {
      return JSON.parse(str) as T;
    } catch {
      return null;
    }
  };
  
  // A function to format currency
  export const formatCurrency = (amount: number, locale: string = 'en-US', currency: string = 'USD'): string => {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
  };
  
  // Add or modify more functions as per the requirements of your project
  