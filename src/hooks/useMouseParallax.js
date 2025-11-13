import { useEffect, useState } from 'react';
import { ORIGIN } from '../constants/motion.js';

/**
 * Track the cursor position and translate it into a parallax-friendly offset.
 * @param {Object} options
 * @param {number} options.intensity - Maximum offset applied to the parallax effect.
 * @returns {{ x: number, y: number }}
 */
export function useMouseParallax({ intensity = 30 } = {}) {
  const [position, setPosition] = useState(ORIGIN);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;

      // Guard against zero-sized viewports, which can occur in rare cases.
      if (!innerWidth || !innerHeight) {
        return;
      }

      const offsetX = (event.clientX / innerWidth - 0.5) * intensity;
      const offsetY = (event.clientY / innerHeight - 0.5) * intensity;

      setPosition({
        x: Number.isFinite(offsetX) ? offsetX : 0,
        y: Number.isFinite(offsetY) ? offsetY : 0,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return position;
}

