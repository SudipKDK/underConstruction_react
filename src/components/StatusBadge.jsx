import PropTypes from 'prop-types';

export function StatusBadge({ isVisible }) {
  return (
    <div
      className={`flex justify-center mb-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/30 bg-red-950/30 backdrop-blur-sm">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-red-400 text-sm font-medium tracking-wide">In Development</span>
      </div>
    </div>
  );
}

StatusBadge.propTypes = {
  isVisible: PropTypes.bool,
};

