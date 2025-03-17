import styled from 'styled-components';

export const TransitionContainer = styled.div`
  &.page-enter {
    opacity: 0;
    transform: translateY(10px);
  }

  &.page-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 300ms,
      transform 300ms;
  }

  &.page-exit {
    opacity: 1;
    transform: translateY(0);
  }

  &.page-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition:
      opacity 300ms,
      transform 300ms;
  }
`;
