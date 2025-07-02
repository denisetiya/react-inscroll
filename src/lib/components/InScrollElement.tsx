import React, { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { useInScrollConfig } from '../hooks/useInScrollConfig';
import type { InScrollElementProps } from '../types';

export function InScrollElement({
  animation,
  offset,
  delay,
  duration,
  easing,
  once,
  mirror,
  anchorPlacement,
  children,
  as: Component = 'div',
  className = '',
  style = {},
  ...props
}: InScrollElementProps) {
  const globalConfig = useInScrollConfig();
  const [isAnimated, setIsAnimated] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Merge props with global config
  const config = {
    offset: offset ?? globalConfig.offset ?? 120,
    delay: delay ?? globalConfig.delay ?? 0,
    duration: duration ?? globalConfig.duration ?? 400,
    easing: easing ?? globalConfig.easing ?? 'ease',
    once: once ?? globalConfig.once ?? false,
    mirror: mirror ?? globalConfig.mirror ?? false,
    anchorPlacement: anchorPlacement ?? globalConfig.anchorPlacement ?? 'top-bottom',
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: `${config.offset}px`,
    triggerOnce: false, // Always false here, we handle triggerOnce logic manually
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      // Element is in view and hasn't been animated yet
      const timer = setTimeout(() => {
        setIsAnimated(true);
        if (config.once) {
          setHasAnimated(true);
        }
      }, config.delay);

      return () => clearTimeout(timer);
    } else if (!inView && config.mirror && !config.once && isAnimated) {
      // Element is out of view, mirror is enabled, not once-only, and was previously animated
      setIsAnimated(false);
    }
  }, [inView, config.delay, config.mirror, config.once, hasAnimated, isAnimated]);

  const combinedStyle: React.CSSProperties = {
    ...style,
    transitionDuration: `${config.duration}ms`,
    transitionTimingFunction: config.easing,
  };

  const combinedClassName = [
    className,
    globalConfig.initClassName || 'inscroll-init',
    isAnimated ? globalConfig.animatedClassName || 'inscroll-animate' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      ref={ref}
      className={combinedClassName}
      style={combinedStyle}
      data-inscroll={animation}
      {...props}
    >
      {children}
    </Component>
  );
}
