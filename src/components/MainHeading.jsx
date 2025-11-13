import PropTypes from 'prop-types';
import { ORIGIN } from '../constants/motion.js';

export function MainHeading({ isVisible, mousePosition = ORIGIN }) {
  const { x, y } = mousePosition;

  return (
    <h1
      className={`text-7xl md:text-8xl lg:text-9xl font-black text-center mb-6 tracking-tighter transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      style={{
        transform: `perspective(1000px) rotateX(${y * 0.03}deg) rotateY(${x * 0.03}deg)`,
        transition: 'transform 0.3s ease',
      }}
    >
      <span
        className="inline-block bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        style={{
          fontStyle: 'italic',
          textShadow: '0 0 80px rgba(220, 38, 38, 0.3)',
        }}
      >
        COMING
      </span>
      <br />
      <span
        className="inline-block bg-gradient-to-r from-red-600 via-red-400 to-red-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        style={{
          fontStyle: 'italic',
          textShadow: '0 0 60px rgba(220, 38, 38, 0.5)',
        }}
      >
        SOON
      </span>
      <span
        className="text-red-500 animate-pulse-fast"
        style={{ textShadow: '0 0 30px rgba(220, 38, 38, 0.9)' }}
      >
        .
      </span>
    </h1>
  );
}

MainHeading.propTypes = {
  isVisible: PropTypes.bool,
  mousePosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};


