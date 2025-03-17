import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const usePageTransition = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.classList.add('page-enter');

      // Force a reflow to ensure the animation starts
      void container.offsetWidth;

      container.classList.add('page-enter-active');

      const timer = setTimeout(() => {
        container.classList.remove('page-enter');
        container.classList.remove('page-enter-active');
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return { containerRef };
};
