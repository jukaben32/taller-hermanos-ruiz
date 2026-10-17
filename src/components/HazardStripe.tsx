import React from 'react';

interface HazardStripeProps {
  className?: string;
  height?: string;
}

export const HazardStripe: React.FC<HazardStripeProps> = ({
  className = '',
  height = 'h-2',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`w-full ${height} hazard-strip ${className}`}
    />
  );
};
