const theme = {
  colors: {
    primary: '#1890ff',
    secondary: '#722ed1',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
    background: '#ffffff',
    text: '#000000',
    lightGray: '#f0f2f5',
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.1s ease',
    slow: 'all 0.5s ease',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    small: '2px',
    medium: '4px',
    large: '8px',
    round: '50%',
  },
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
  },
};

export default theme;

// Ant Design theme configuration
export const antdTheme = {
  token: {
    colorPrimary: theme.colors.primary,
    colorSuccess: theme.colors.success,
    colorWarning: theme.colors.warning,
    colorError: theme.colors.error,
    borderRadius: 4,
    fontSize: 16,
    lineHeight: 1.8,
  },
};
