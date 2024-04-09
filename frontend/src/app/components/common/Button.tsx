import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;  // For accessibility, especially for icon buttons
  disabled?: boolean;  // New disabled prop
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className,
  ariaLabel,
  disabled = false,
  ...props
}) => {
  // Construct class names conditionally
  const buttonClassNames = [styles.button];
  if (className) {
    buttonClassNames.push(className);
  }

  return (
    <button
      className={buttonClassNames.join(' ')}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel || (typeof children === 'string' ? children : '')}
      disabled={disabled}  // Add disabled prop to button element
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
