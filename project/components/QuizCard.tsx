import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import { CircleCheck as CheckCircle, Circle as XCircle } from 'lucide-react-native';

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswerSelected: (isCorrect: boolean) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  options,
  correctAnswer,
  onAnswerSelected,
}) => {
  const { colors, spacing } = useTheme();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: spacing.lg,
      marginVertical: spacing.md,
    },
    questionText: {
      fontFamily: 'Inter-Bold',
      fontSize: 20,
      color: colors.text,
      marginBottom: spacing.lg,
      textAlign: 'center',
    },
    optionsContainer: {
      marginBottom: spacing.md,
    },
    optionButton: {
      padding: spacing.md,
      borderRadius: 12,
      marginBottom: spacing.sm,
      borderWidth: 1,
    },
    optionText: {
      fontFamily: 'Inter-Medium',
      fontSize: 16,
      textAlign: 'center',
    },
    resultContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: spacing.md,
      padding: spacing.md,
      borderRadius: 8,
    },
    resultText: {
      fontFamily: 'Inter-Bold',
      fontSize: 16,
      marginLeft: spacing.sm,
    },
    correctContainer: {
      backgroundColor: 'rgba(67, 160, 71, 0.1)',
    },
    incorrectContainer: {
      backgroundColor: 'rgba(229, 57, 53, 0.1)',
    },
    correctText: {
      color: colors.success,
    },
    incorrectText: {
      color: colors.error,
    },
  });
  
  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    // Wait a moment to show the result before proceeding
    setTimeout(() => {
      onAnswerSelected(answer === correctAnswer);
    }, 1500);
  };
  
  const getOptionStyle = (option: string) => {
    if (!showResult || selectedAnswer !== option) {
      return {
        backgroundColor: selectedAnswer === option ? colors.primaryLight : colors.background,
        borderColor: selectedAnswer === option ? colors.primary : colors.border,
      };
    }
    
    if (option === correctAnswer) {
      return {
        backgroundColor: 'rgba(67, 160, 71, 0.1)',
        borderColor: colors.success,
      };
    }
    
    if (selectedAnswer === option) {
      return {
        backgroundColor: 'rgba(229, 57, 53, 0.1)',
        borderColor: colors.error,
      };
    }
    
    return {
      backgroundColor: colors.background,
      borderColor: colors.border,
      opacity: 0.5,
    };
  };
  
  const getOptionTextStyle = (option: string) => {
    if (!showResult) {
      return {
        color: selectedAnswer === option ? colors.primary : colors.text,
      };
    }
    
    if (option === correctAnswer) {
      return { color: colors.success };
    }
    
    if (selectedAnswer === option && option !== correctAnswer) {
      return { color: colors.error };
    }
    
    return { color: colors.textSecondary };
  };
  
  const isCorrect = selectedAnswer === correctAnswer;
  
  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question}</Text>
      
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.optionButton, getOptionStyle(option)]}
            onPress={() => !showResult && handleSelectAnswer(option)}
            disabled={showResult}
          >
            <Text style={[styles.optionText, getOptionTextStyle(option)]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {showResult && (
        <View style={[
          styles.resultContainer,
          isCorrect ? styles.correctContainer : styles.incorrectContainer
        ]}>
          {isCorrect ? (
            <CheckCircle size={24} color={colors.success} />
          ) : (
            <XCircle size={24} color={colors.error} />
          )}
          <Text style={[
            styles.resultText,
            isCorrect ? styles.correctText : styles.incorrectText
          ]}>
            {isCorrect ? 'Correct!' : 'Incorrect!'}
          </Text>
        </View>
      )}
    </View>
  );
};