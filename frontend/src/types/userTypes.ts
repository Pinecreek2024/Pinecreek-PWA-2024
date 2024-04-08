// Basic structure for a user
export interface User {
    id: string;
    username: string;
    email: string;
    password: string; // Note: Handle password data carefully and securely
    role: UserRole; // Enum for user roles if applicable
    // Additional properties like profile pictures, contact info, etc.
  }
  
  // Enum for user roles, useful for authorization and access control
  export enum UserRole {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
  }
  
  // Define additional interfaces or types as needed for your user model
  