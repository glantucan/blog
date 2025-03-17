import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const useHeader = () => {
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

  return {
    selectedKey,
    menuItems
  };
};
