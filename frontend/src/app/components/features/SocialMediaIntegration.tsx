import React from 'react';
import styles from './SocialMediaIntegration.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIntegration: React.FC = () => {
  const socialLinks = {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    twitter: "https://twitter.com/yourpage"
  };

  const handleIconClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.socialMediaIntegration}>
      <h3>Follow us on Social Media</h3>
      <div className={styles.icons}>
        <FontAwesomeIcon 
          icon={faFacebookF} 
          onClick={() => handleIconClick(socialLinks.facebook)}
          role="button"
          aria-label="Facebook"
          tabIndex={0}
        />
        <FontAwesomeIcon 
          icon={faInstagram} 
          onClick={() => handleIconClick(socialLinks.instagram)}
          role="button"
          aria-label="Instagram"
          tabIndex={0}
        />
        <FontAwesomeIcon 
          icon={faTwitter} 
          onClick={() => handleIconClick(socialLinks.twitter)}
          role="button"
          aria-label="Twitter"
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default SocialMediaIntegration;
