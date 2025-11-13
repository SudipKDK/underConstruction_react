import { useEffect, useState } from 'react';

/**
 * Returns a boolean that flips to true after the component mounts,
 * optionally after a delay. Useful for triggering entrance animations.
 * @param {number} delay - Delay in milliseconds before revealing.
 * @returns {boolean}
 */
export function useRevealOnMount(delay = 0) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsRevealed(true);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsRevealed(true);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay]);

  return isRevealed;
}

