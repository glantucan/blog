import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const WorkingMessage = styled.div`
  background-color: ${props => props.theme.colors.success};
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 2rem;
  text-align: center;
`;
