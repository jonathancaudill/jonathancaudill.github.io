import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface GradientBackgroundProps {
  scrollProgress?: number;
}

const GradientBackground = ({ scrollProgress = 0 }: GradientBackgroundProps) => {
  const location = useLocation();

  const getGradient = () => {
    if (location.pathname === '/stuck') {
      // Pink-blue gradient with scroll effect
      return `linear-gradient(135deg, 
        rgb(246, 62, 154) ${scrollProgress * 30 - 50}%, 
        rgb(26, 105, 232) ${150 + scrollProgress * 30}%
      )`;
    } else {
      // Blue-green gradient for other pages
      return `linear-gradient(135deg, 
        rgb(9, 148, 81) ${scrollProgress * 30 - 50}%, 
        rgb(26, 105, 232) ${150 + scrollProgress * 30}%
      )`;
    }
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full mr-edge"
      style={{
        background: getGradient(),
        zIndex: -1
      }}
    />
  );
};

export default GradientBackground; 