'use client';

import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const TransitionContainer = styled.div`
  &.page-enter {
    opacity: 0;
    transform: translateY(10px);
  }
  
  &.page-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }
  
  &.page-exit {
    opacity: 1;
    transform: translateY(0);
  }
  
  &.page-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 300ms, transform 300ms;
  }
`;

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  
  // Apply animation class on component mount
  React.useEffect(() => {
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
  
  return (
    <TransitionContainer ref={containerRef} key={pathname}>
      {children}
    </TransitionContainer>
  );
};

export default PageTransition;
