import PropTypes from 'prop-types';
import { ORIGIN } from '../../constants/motion.js';

const transition = 'background 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

export function ParallaxBackground({ mousePosition = ORIGIN }) {
  const { x, y } = mousePosition;

  const gradientStyle = {
    background: `
      radial-gradient(circle at ${50 + x}% ${50 + y}%, rgba(220, 38, 38, 0.4) 0%, transparent 50%),
      radial-gradient(circle at ${20 - x * 0.3}% ${80 - y * 0.3}%, rgba(185, 28, 28, 0.3) 0%, transparent 60%),
      radial-gradient(circle at ${80 + x * 0.2}% ${20 + y * 0.2}%, rgba(239, 68, 68, 0.2) 0%, transparent 70%)
    `,
    transition,
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={gradientStyle} />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translate(${x * 0.1}px, ${y * 0.1}px)`,
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.6) 0%, transparent 70%)',
            transform: `translate(${x * 0.5}px, ${y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(185, 28, 28, 0.5) 0%, transparent 70%)',
            animationDelay: '2s',
            transform: `translate(${-x * 0.4}px, ${-y * 0.4}px)`,
          }}
        />

        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 border border-red-500/20 rounded-full animate-float-1"
          style={{
            transform: `translate(${x * 0.8}px, ${y * 0.8}px)`,
            boxShadow: '0 0 40px rgba(220, 38, 38, 0.2)',
          }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-40 h-40 border-2 border-red-600/15 rounded-full animate-float-2"
          style={{
            transform: `translate(${-x * 0.6}px, ${-y * 0.6}px)`,
            boxShadow: '0 0 30px rgba(220, 38, 38, 0.15)',
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-[600px] h-[600px] border border-red-900/10 rounded-full animate-spin-slow" />
          <div
            className="absolute w-[700px] h-[700px] border border-red-800/10 rounded-full animate-spin-reverse"
            style={{ animationDuration: '40s' }}
          />
          <div
            className="absolute w-[800px] h-[800px] border border-red-700/5 rounded-full animate-spin-slow"
            style={{ animationDuration: '60s' }}
          />
        </div>

        <div
          className="absolute top-1/3 right-1/4 opacity-10 animate-float-3"
          style={{ transform: `translate(${x * 0.4}px, ${y * 0.4}px)` }}
        >
          <div className="w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[120px] border-b-red-500/40" />
        </div>

        <div
          className="absolute bottom-1/3 left-1/3 w-32 h-32 border-2 border-red-600/20 rotate-45 animate-rotate-slow"
          style={{
            transform: `translate(${-x * 0.5}px, ${-y * 0.5}px) rotate(45deg)`,
            boxShadow: '0 0 30px rgba(220, 38, 38, 0.1)',
          }}
        />
      </div>
    </div>
  );
}

ParallaxBackground.propTypes = {
  mousePosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

