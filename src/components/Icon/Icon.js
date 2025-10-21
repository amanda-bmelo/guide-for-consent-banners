import React from 'react';

const Icon = ({ 
  svgPath, 
  className = '', 
  size = 24, 
  alt = 'Icon',
  ...props 
}) => {
  const fullPath = require(`../../assets/icons/${svgPath}`);

  return (
    <img
      src={fullPath}
      alt={alt}
      className={`icon ${className}`}
      style={{ width: size, height: size }}
      {...props}
    />
  );
};

export default Icon;