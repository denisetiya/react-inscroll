import { useState, useCallback } from 'react';

interface UseClickableAnimationReturn {
  animationKey: string;
  isAnimating: boolean;
  clickableProps: {
    onClick: () => void;
    style?: React.CSSProperties;
  };
}

/**
 * Custom hook untuk membuat animasi yang bisa diulang dengan klik
 * 
 * @returns Object berisi key animasi, status animasi, dan props yang diperlukan
 */
export function useClickableAnimation(): UseClickableAnimationReturn {
  const [animationKey, setAnimationKey] = useState(() => `anim-${Date.now()}`);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    // Generate key baru untuk memaksa re-render dengan animasi baru
    setAnimationKey(`anim-${Date.now()}`);
    
    // Reset status animasi setelah durasi animasi selesai
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Sesuaikan dengan durasi animasi default
  }, [isAnimating]);

  return {
    animationKey,
    isAnimating,
    clickableProps: {
      onClick: handleClick,
      style: {
        cursor: isAnimating ? 'default' : 'pointer',
      },
    },
  };
}
