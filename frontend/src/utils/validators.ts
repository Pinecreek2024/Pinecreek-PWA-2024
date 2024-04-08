/**
 * Collection of validation utility functions.
 */

// Email Validation
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
  
  // Password Strength Validation
  export const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number
    return passwordRegex.test(password);
  };
  
  // Generic Text Input Length Validation
  export const validateTextLength = (text: string, minLength: number, maxLength: number): boolean => {
    return text.length >= minLength && text.length <= maxLength;
  };
  
  // Add any other specific validators as per your application's needs
  