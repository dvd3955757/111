import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

// Define theme colors
const lightTheme = {
  primary: '#006064',        // Deep teal (primary brand color)
  primaryLight: '#e0f7fa',   // Light teal for backgrounds
  secondary: '#a5d6a7',      // Soft green
  accent: '#e65100',         // Warm orange/terracotta
  success: '#43a047',        // Green
  warning: '#ffb74d',        // Amber
  error: '#e53935',          // Red
  
  background: '#ffffff',     // White background
  card: '#f5f5f5',           // Light grey for cards
  text: '#263238',           // Dark blue-grey for text
  textSecondary: '#607d8b',  // Medium blue-grey for secondary text
  border: '#e0e0e0',         // Light grey for borders
  white: '#ffffff',          // Pure white
};

const darkTheme = {
  primary: '#00acc1',        // Brighter teal for dark mode
  primaryLight: '#003a40',   // Darker teal that's still visible
  secondary: '#81c784',      // Brighter green for dark mode
  accent: '#ff9800',         // Brighter orange for dark mode
  success: '#66bb6a',        // Brighter green for dark mode
  warning: '#ffa726',        // Brighter amber for dark mode
  error: '#ef5350',          // Brighter red for dark mode
  
  background: '#121212',     // Dark background
  card: '#1e1e1e',           // Slightly lighter dark for cards
  text: '#eceff1',           // Off-white for text
  textSecondary: '#b0bec5',  // Light blue-grey for secondary text
  border: '#333333',         // Dark grey for borders
  white: '#ffffff',          // Pure white
};

// Define spacing
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Create the theme context
type ThemeContextType = {
  colors: typeof lightTheme;
  spacing: typeof spacing;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  colors: lightTheme,
  spacing,
  isDark: false,
  toggleTheme: () => {},
});

// Create a provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get the device color scheme
  const deviceColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(deviceColorScheme === 'dark');
  
  // Update theme when device color scheme changes
  useEffect(() => {
    setIsDark(deviceColorScheme === 'dark');
  }, [deviceColorScheme]);
  
  // Function to toggle theme
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  
  const theme = {
    colors: isDark ? darkTheme : lightTheme,
    spacing,
    isDark,
    toggleTheme,
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a hook to use the theme
export const useTheme = () => useContext(ThemeContext);