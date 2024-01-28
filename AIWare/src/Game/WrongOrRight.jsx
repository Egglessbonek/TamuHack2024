import React, { useState } from 'react';
import './WrongOrRight.css'; // Import or define styles for glowing effect

const WrongOrRight = () => {
  const [isRedGlowing, setRedGlowing] = useState(false);
  const [isGreenGlowing, setGreenGlowing] = useState(false);

  const handleRedClick = () => {
    setRedGlowing(true);
    setGreenGlowing(false);
    setTimeout(() => setRedGlowing(false), 500); // Remove glow after 0.5 seconds
  };

  const handleGreenClick = () => {
    setGreenGlowing(true);
    setRedGlowing(false);
    setTimeout(() => setGreenGlowing(false), 500); // Remove glow after 0.5 seconds
  };

  return (
    <div>
      <div
        className={`circle ${isRedGlowing ? 'glow' : ''}`}
        style={{ backgroundColor: 'red' }}
        onClick={handleRedClick}
      ></div>
      <div
        className={`circle ${isGreenGlowing ? 'glow' : ''}`}
        style={{ backgroundColor: 'green' }}
        onClick={handleGreenClick}
      ></div>
    </div>
  );
};

export default WrongOrRight;