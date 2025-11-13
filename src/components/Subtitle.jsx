import PropTypes from 'prop-types';

export function Subtitle({ isVisible }) {
  return (
    <p
      className={`text-gray-400 text-xl md:text-2xl text-center mb-12 tracking-wide transition-all duration-1000 delay-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      Something extraordinary is on its way.
      <br />
      <span className="text-gray-500 text-lg">Details take time, perfection takes longer.</span>
    </p>
  );
}

Subtitle.propTypes = {
  isVisible: PropTypes.bool,
};

