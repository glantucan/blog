import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

export const StyledFooter = styled(AntFooter)`
  text-align: center;
  background-color: ${props => props.theme.colors.lightGray};
  padding: 24px 50px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 24px 20px;
  }
`;
