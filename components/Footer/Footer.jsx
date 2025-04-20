'use client';

import { Typography } from 'antd';
import { StyledFooter } from './Footer.styled';
import { useFooter } from './useFooter.hook';

const { Text } = Typography;

const Footer = () => {
  const { currentYear } = useFooter();

  return (
    <StyledFooter>
      <Text type="secondary">
        Photography Blog © {currentYear} - Built with Next.js and Ant Design
      </Text>
    </StyledFooter>
  );
};

export default Footer;
