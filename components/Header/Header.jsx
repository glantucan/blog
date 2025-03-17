'use client';

import Link from 'next/link';
import { CameraOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import { StyledHeader, Logo, StyledTitle, StyledMenu } from './Header.styled';
import { useHeader } from './useHeader.hook';

const { Title } = Typography;

const Header = () => {
  const { selectedKey, menuItems } = useHeader();
  
  return (
    <StyledHeader>
      <Logo>
        <CameraOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
        <StyledTitle level={4}>Photography Blog</StyledTitle>
      </Logo>
      <StyledMenu
        mode="horizontal"
        selectedKeys={[selectedKey]}
        items={menuItems}
      />
    </StyledHeader>
  );
};

export default Header;
