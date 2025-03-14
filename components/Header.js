'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { Layout, Menu, Typography } from 'antd';
import { CameraOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const StyledHeader = styled(AntHeader)`
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

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  margin: 0 0 0 12px !important;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem !important;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.2rem !important;
  }
`;

const StyledMenu = styled(Menu)`
  border: none;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Header = () => {
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState('/');
  
  useEffect(() => {
    setSelectedKey(pathname);
  }, [pathname]);
  
  const menuItems = [
    {
      key: '/',
      label: <Link href="/">Home</Link>,
    },
    {
      key: '/about',
      label: <Link href="/about">About</Link>,
    },
  ];
  
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
