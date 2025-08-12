import React from 'react';
import Styles from "./Rating.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function Rating({ rate }) {
  // Ensure rate is between 0 and 5
  const clampedRate = Math.min(Math.max(0, rate), 5);
  const fullStars = Math.floor(clampedRate);
  const hasHalfStar = clampedRate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={Styles.ratingContainer}>
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon 
          key={`full-${i}`} 
          icon={faStar} 
          className={Styles.star} 
          style={{ color: 'var(--alt-background)' }}
        />
      ))}
      
      {/* Half star */}
      {hasHalfStar && (
        <FontAwesomeIcon 
          key="half" 
          icon={faStarHalfAlt} 
          className={Styles.star} 
          style={{ color: 'var(--alt-background)' }}
        />
      )}
      
      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon 
          key={`empty-${i}`} 
          icon={faStarRegular} 
          className={Styles.star} 
          style={{ color: 'var(--alt-background)' }}
        />
      ))}
    </div>
  );
}

export default Rating;