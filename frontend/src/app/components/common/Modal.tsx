import React, { ReactNode } from 'react';
import styles from './Modal.module.css';
import IconButton from './IconButton'; // Assuming you have an IconButton component
import closeIcon from '@/assets/icons/close.svg'; // Importing SVG as a module

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <IconButton icon={<img src={closeIcon} alt="Close" />} onClick={onClose} ariaLabel="Close" />
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
