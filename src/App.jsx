import {
  FooterNote,
  MainHeading,
  ParallaxBackground,
  SocialLinks,
  StatusBadge,
  Subtitle,
} from './components/index.js';
import { useMouseParallax, useRevealOnMount } from './hooks/index.js';

export default function ComingSoon() {
  const mousePosition = useMouseParallax();
  const isLoaded = useRevealOnMount();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center px-4 overflow-hidden relative">
      <ParallaxBackground mousePosition={mousePosition} />

      <div className="relative z-10 max-w-5xl w-full">
        <StatusBadge isVisible={isLoaded} />
        <MainHeading isVisible={isLoaded} mousePosition={mousePosition} />
        <Subtitle isVisible={isLoaded} />
        <SocialLinks isVisible={isLoaded} />
        <FooterNote isVisible={isLoaded} />
      </div>
    </div>
  );
}