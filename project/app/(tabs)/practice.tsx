import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/theme/ThemeContext';
import { BookOpen, Award, Check } from 'lucide-react-native';

export default function PracticeScreen() {
  const { colors, spacing } = useTheme();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      flex: 1,
    },
    header: {
      padding: spacing.md,
      paddingTop: spacing.lg,
    },
    title: {
      fontFamily: 'Inter-Bold',
      fontSize: 28,
      color: colors.text,
      marginBottom: spacing.sm,
    },
    subtitle: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: colors.textSecondary,
      marginBottom: spacing.md,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: spacing.md,
      marginHorizontal: spacing.md,
      marginBottom: spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardIconContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: spacing.md,
    },
    cardContent: {
      flex: 1,
    },
    cardTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: colors.text,
      marginBottom: spacing.xs,
    },
    cardDescription: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      color: colors.textSecondary,
    },
    quizCard: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: spacing.md,
      marginHorizontal: spacing.md,
      marginBottom: spacing.md,
    },
    quizTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: colors.text,
      marginBottom: spacing.sm,
    },
    quizQuestion: {
      fontFamily: 'Nunito-Bold',
      fontSize: 22,
      color: colors.text,
      marginBottom: spacing.md,
      textAlign: 'center',
    },
    optionButton: {
      backgroundColor: colors.background,
      borderRadius: 12,
      padding: spacing.md,
      marginBottom: spacing.sm,
      borderWidth: 1,
      borderColor: colors.border,
    },
    optionText: {
      fontFamily: 'Inter-Medium',
      fontSize: 16,
      color: colors.text,
      textAlign: 'center',
    },
    sectionTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 20,
      color: colors.text,
      marginTop: spacing.lg,
      marginBottom: spacing.sm,
      paddingHorizontal: spacing.md,
    },
    achievementCard: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: spacing.md,
      marginHorizontal: spacing.md,
      marginBottom: spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
    },
    achievementIcon: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.primaryLight,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: spacing.md,
    },
    achievementContent: {
      flex: 1,
    },
    achievementTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 16,
      color: colors.text,
    },
    achievementDescription: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      color: colors.textSecondary,
    },
    completedTag: {
      backgroundColor: colors.success,
      paddingHorizontal: spacing.sm,
      paddingVertical: 4,
      borderRadius: 4,
      alignSelf: 'flex-start',
    },
    completedText: {
      fontFamily: 'Inter-Medium',
      fontSize: 12,
      color: colors.white,
    },
  });

  const practiceActivities = [
    {
      id: '1',
      title: 'Vocabulary Review',
      description: 'Practice with flashcards to reinforce word memory',
      icon: <BookOpen size={24} color={colors.white} />,
      bgColor: colors.primary,
    },
    {
      id: '2',
      title: 'Daily Challenge',
      description: 'Complete today\'s challenge to maintain your streak',
      icon: <Award size={24} color={colors.white} />,
      bgColor: colors.accent,
    },
  ];

  const achievements = [
    {
      id: '1',
      title: 'First Day Completed',
      description: 'Completed your first day of learning',
      completed: true,
    },
    {
      id: '2',
      title: '3-Day Streak',
      description: 'Maintained a learning streak for 3 days',
      completed: true,
    },
    {
      id: '3',
      title: 'First Quiz Mastered',
      description: 'Scored 100% on a quiz',
      completed: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Practice</Text>
          <Text style={styles.subtitle}>Strengthen your Māori language skills</Text>
        </View>

        {practiceActivities.map((activity) => (
          <TouchableOpacity key={activity.id} style={styles.card}>
            <View style={[styles.cardIconContainer, { backgroundColor: activity.bgColor }]}>
              {activity.icon}
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{activity.title}</Text>
              <Text style={styles.cardDescription}>{activity.description}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.quizCard}>
          <Text style={styles.quizTitle}>Quick Quiz</Text>
          <Text style={styles.quizQuestion}>What does "Mōrena" mean?</Text>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Good night</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Thanks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionButton, { backgroundColor: colors.primaryLight, borderColor: colors.primary }]}>
            <Text style={[styles.optionText, { color: colors.primary }]}>Good morning</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Achievements</Text>

        {achievements.map((achievement) => (
          <View key={achievement.id} style={styles.achievementCard}>
            <View style={styles.achievementIcon}>
              {achievement.completed ? (
                <Check size={24} color={colors.primary} />
              ) : (
                <Award size={24} color={colors.primary} />
              )}
            </View>
            <View style={styles.achievementContent}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
              <Text style={styles.achievementDescription}>{achievement.description}</Text>
            </View>
            {achievement.completed && (
              <View style={styles.completedTag}>
                <Text style={styles.completedText}>Completed</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}