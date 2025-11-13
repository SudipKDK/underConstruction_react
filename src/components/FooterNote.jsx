import PropTypes from 'prop-types';

export function FooterNote({ isVisible, year = new Date().getFullYear() }) {
  return (
    <p
      className={`text-gray-600 text-sm text-center mt-16 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      © {year} All rights reserved
    </p>
  );
}

FooterNote.propTypes = {
  isVisible: PropTypes.bool,
  year: PropTypes.number,
};

