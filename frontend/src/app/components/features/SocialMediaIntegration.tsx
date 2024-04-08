import React from 'react';
import styles from './SocialMediaIntegration.module.css';

// Assuming use of icons from a library like FontAwesome or similar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIntegration: React.FC = () => {
  return (
    <div className={styles.socialMediaIntegration}>
      <h3>Follow us on Social Media</h3>
      <div className={styles.icons}>
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIntegration;
