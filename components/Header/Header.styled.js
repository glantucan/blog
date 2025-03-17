import styled from 'styled-components';
import { Layout, Menu, Typography } from 'antd';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

export const StyledHeader = styled(AntHeader)`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled(Title)`
  margin: 0 0 0 12px !important;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem !important;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.2rem !important;
  }
`;

export const StyledMenu = styled(Menu)`
  border: none;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
