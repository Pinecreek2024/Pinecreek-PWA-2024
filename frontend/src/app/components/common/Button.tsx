import React from 'react';
import styles from './Button.module.css'; // Assuming you have a CSS module for styling

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; // Including the 'type' prop
  className?: string;
  // Add any additional props you might need
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button', // Default type is 'button'
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
      {...props} // Spread any additional props
    >
      {children}
    </button>
  );
};

export default Button;
