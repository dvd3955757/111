import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';

interface LessonCardProps {
  title: string;
  description: string;
  progress: number;
  image: string;
  small?: boolean;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  progress,
  image,
  small = false,
}) => {
  const { colors, spacing } = useTheme();
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: spacing.md,
      width: small ? 200 : '100%',
      marginRight: small ? spacing.md : 0,
    },
    image: {
      width: '100%',
      height: small ? 100 : 150,
    },
    content: {
      padding: spacing.md,
    },
    title: {
      fontFamily: 'Inter-Bold',
      fontSize: small ? 16 : 18,
      color: colors.text,
      marginBottom: small ? spacing.xs : spacing.sm,
    },
    description: {
      fontFamily: 'Inter-Regular',
      fontSize: small ? 12 : 14,
      color: colors.textSecondary,
      marginBottom: spacing.sm,
      height: small ? 32 : 'auto',
    },
    progressContainer: {
      height: 4,
      backgroundColor: colors.border,
      borderRadius: 2,
    },
    progressFill: {
      height: '100%',
      backgroundColor: colors.primary,
      borderRadius: 2,
    },
    progressText: {
      fontFamily: 'Inter-Medium',
      fontSize: 12,
      color: colors.textSecondary,
      marginTop: spacing.xs,
      textAlign: 'right',
    },
  });
  
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: image }} 
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={small ? 2 : 3}>{description}</Text>
        <View style={styles.progressContainer}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>
        <Text style={styles.progressText}>{Math.round(progress * 100)}% Complete</Text>
      </View>
    </View>
  );
};