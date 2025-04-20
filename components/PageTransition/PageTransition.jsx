'use client';

import { usePageTransition } from './usePageTransition.hook';
import { TransitionContainer } from './PageTransition.styled';

const PageTransition = ({ children }) => {
  const { containerRef } = usePageTransition();

  return <TransitionContainer ref={containerRef}>{children}</TransitionContainer>;
};

export default PageTransition;
