import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { useTheme } from '@/theme/ThemeContext';
import { Award } from 'lucide-react-native';

interface DailyStreakProps {
  days: number;
  size: number;
}

export const DailyStreak: React.FC<DailyStreakProps> = ({ days, size }) => {
  const { colors } = useTheme();
  
  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <View style={[
        styles.container, 
        { 
          width: size, 
          height: size, 
          borderRadius: size / 2,
          backgroundColor: colors.primaryLight,
        }
      ]}>
        <Award size={size * 0.5} color={colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});