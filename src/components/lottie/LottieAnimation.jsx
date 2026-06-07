import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { getLottieAnimation } from '../../assets/lottie';
import './LottieAnimation.scss';

const LottieAnimation = ({
  name,
  loop = false,
  autoplay = true,
  className = '',
  onComplete
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const animationData = getLottieAnimation(name);
    if (!animationData) {
      console.warn(`[LottieAnimation] Animation "${name}" was not found in src/assets/lottie/`);
      return undefined;
    }

    animationRef.current = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop,
      autoplay,
      animationData
    });

    const handleComplete = () => {
      onComplete?.();
    };

    if (onComplete) {
      animationRef.current.addEventListener('complete', handleComplete);
    }

    return () => {
      if (animationRef.current) {
        if (onComplete) {
          animationRef.current.removeEventListener('complete', handleComplete);
        }
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [name, loop, autoplay, onComplete]);

  return (
    <div
      ref={containerRef}
      className={`lottie-animation ${className}`.trim()}
      aria-hidden="true"
    />
  );
};

export default LottieAnimation;
