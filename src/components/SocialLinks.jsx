import PropTypes from 'prop-types';
import { Github, Linkedin } from 'lucide-react';

const defaultLinks = [
  { id: 'github', label: 'GitHub', href: '#', icon: Github },
  { id: 'linkedin', label: 'LinkedIn', href: '#', icon: Linkedin },
];

export function SocialLinks({ isVisible, links = defaultLinks }) {
  return (
    <div
      className={`flex gap-6 justify-center transition-all duration-1000 delay-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {links.map(({ id, label, href, icon: Icon = Github }) => (
        <a
          key={id}
          href={href}
          className="group relative w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 flex items-center justify-center hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 hover:scale-110 overflow-hidden"
          aria-label={label}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-red-800/20 transition-all duration-300" />
          <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
        </a>
      ))}
    </div>
  );
}

SocialLinks.propTypes = {
  isVisible: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
    })
  ),
};

