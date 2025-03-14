import styled from 'styled-components';
import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const StyledFooter = styled(AntFooter)`
  text-align: center;
  background-color: #f0f2f5;
  padding: 24px 50px;
  
  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <StyledFooter>
      <Text type="secondary">
        Photography Blog © {currentYear} - Built with Next.js and Ant Design
      </Text>
    </StyledFooter>
  );
};

export default Footer;
