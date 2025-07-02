import { useState, useCallback } from 'react';

export function useClickToRepeat() {
  const [key, setKey] = useState(0);

  const triggerAnimation = useCallback(() => {
    setKey(prev => prev + 1);
  }, []);

  return { key, triggerAnimation };
}

export function useClickableAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleClick = useCallback(() => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    
    setIsAnimating(true);
    setAnimationKey(prev => prev + 1);
    
    // Reset after animation duration (800ms + some buffer)
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [isAnimating]);

  return {
    animationKey,
    isAnimating,
    handleClick,
    clickableProps: {
      onClick: handleClick,
      style: { cursor: isAnimating ? 'wait' : 'pointer' },
      title: isAnimating ? 'Animating...' : 'Click to replay animation'
    }
  };
}
