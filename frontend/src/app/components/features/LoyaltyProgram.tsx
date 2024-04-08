import React, { useState } from 'react';
import Button from '@/components/common/Button';
import styles from './LoyaltyProgram.module.css';

const LoyaltyProgram: React.FC = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [points, setPoints] = useState(0); // Assume points are fetched from an API

  const handleEnroll = () => {
    // Enroll logic here
    setIsEnrolled(true);
    // Fetch points if necessary
  };

  return (
    <div className={styles.loyaltyProgram}>
      <h2>Loyalty Program</h2>
      {!isEnrolled ? (
        <div className={styles.enroll}>
          <p>Join our loyalty program and start earning points!</p>
          <Button onClick={handleEnroll}>Enroll Now</Button>
        </div>
      ) : (
        <div className={styles.memberInfo}>
          <p>You have {points} points.</p>
          {/* Additional member-specific information */}
        </div>
      )}
    </div>
  );
};

export default LoyaltyProgram;
