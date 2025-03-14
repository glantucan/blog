import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { CameraOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

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
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  h1 {
    margin: 0;
    margin-left: 10px;
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
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
        <h1>Photography Blog</h1>
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
