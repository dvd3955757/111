import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import { Volume as VolumeIcon } from 'lucide-react-native';

interface VocabCardProps {
  text: string;
  translation: string;
  image?: string;
  example?: string;
  onPlayAudio: () => void;
}

export const VocabCard: React.FC<VocabCardProps> = ({
  text,
  translation,
  image,
  example,
  onPlayAudio,
}) => {
  const { colors, spacing } = useTheme();
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      borderRadius: 16,
      overflow: 'hidden',
      marginVertical: spacing.md,
    },
    image: {
      width: '100%',
      height: 180,
    },
    content: {
      padding: spacing.md,
    },
    textRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.md,
    },
    maoriText: {
      fontFamily: 'Nunito-Bold',
      fontSize: 28,
      color: colors.text,
    },
    translationText: {
      fontFamily: 'Inter-Regular',
      fontSize: 18,
      color: colors.textSecondary,
      marginBottom: spacing.md,
    },
    exampleContainer: {
      backgroundColor: colors.primaryLight,
      padding: spacing.md,
      borderRadius: 8,
      marginTop: spacing.md,
    },
    exampleTitle: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      color: colors.primary,
      marginBottom: spacing.xs,
    },
    exampleText: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: colors.text,
    },
    audioButton: {
      backgroundColor: colors.primary,
      width: 44,
      height: 44,
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  return (
    <View style={styles.card}>
      {image && (
        <Image 
          source={{ uri: image }} 
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <View style={styles.content}>
        <View style={styles.textRow}>
          <Text style={styles.maoriText}>{text}</Text>
          <TouchableOpacity style={styles.audioButton} onPress={onPlayAudio}>
            <VolumeIcon size={24} color={colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={styles.translationText}>{translation}</Text>
        
        {example && (
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleTitle}>EXAMPLE</Text>
            <Text style={styles.exampleText}>{example}</Text>
          </View>
        )}
      </View>
    </View>
  );
};