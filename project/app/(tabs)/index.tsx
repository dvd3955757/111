import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/theme/ThemeContext';
import { ProgressCircle } from '@/components/ProgressCircle';
import { DailyStreak } from '@/components/DailyStreak';
import { LessonCard } from '@/components/LessonCard';
import { useUserProgress } from '@/hooks/useUserProgress';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const { colors, spacing } = useTheme();
  const router = useRouter();
  const { streak, progress, dailyGoal } = useUserProgress();

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
    greeting: {
      fontFamily: 'Inter-Bold',
      fontSize: 28,
      color: colors.text,
      marginBottom: spacing.sm,
    },
    subGreeting: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: colors.textSecondary,
      marginBottom: spacing.md,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: spacing.md,
      marginBottom: spacing.lg,
      padding: spacing.md,
      backgroundColor: colors.card,
      borderRadius: 12,
    },
    statItem: {
      alignItems: 'center',
      flex: 1,
    },
    statLabel: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      color: colors.textSecondary,
      marginTop: spacing.xs,
    },
    statValue: {
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: colors.text,
    },
    sectionTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 20,
      color: colors.text,
      marginTop: spacing.md,
      marginBottom: spacing.sm,
      paddingHorizontal: spacing.md,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: spacing.md,
      marginHorizontal: spacing.md,
      marginBottom: spacing.md,
    },
    cardTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 16,
      color: colors.text,
    },
    lessonList: {
      paddingHorizontal: spacing.md,
    },
    dailyWordCard: {
      backgroundColor: colors.primary,
      borderRadius: 12,
      padding: spacing.md,
      marginHorizontal: spacing.md,
      marginBottom: spacing.lg,
    },
    dailyWordTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 14,
      color: colors.white,
      marginBottom: spacing.xs,
    },
    dailyWord: {
      fontFamily: 'Nunito-Bold',
      fontSize: 24,
      color: colors.white,
      marginBottom: spacing.xs,
    },
    dailyWordTranslation: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: colors.white,
      opacity: 0.9,
    },
  });

  const continueLesson = () => {
    router.push('/lessons/1');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Kia ora!</Text>
          <Text style={styles.subGreeting}>Welcome back to your Māori language journey</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <ProgressCircle progress={dailyGoal.current / dailyGoal.target} size={60} />
            <Text style={styles.statLabel}>Daily Goal</Text>
            <Text style={styles.statValue}>{dailyGoal.current}/{dailyGoal.target}</Text>
          </View>
          
          <View style={styles.statItem}>
            <DailyStreak days={streak} size={60} />
            <Text style={styles.statLabel}>Streak</Text>
            <Text style={styles.statValue}>{streak} days</Text>
          </View>
          
          <View style={styles.statItem}>
            <ProgressCircle progress={progress.lessonsCompleted / progress.totalLessons} size={60} />
            <Text style={styles.statLabel}>Progress</Text>
            <Text style={styles.statValue}>{progress.lessonsCompleted}/{progress.totalLessons}</Text>
          </View>
        </View>

        <View style={styles.dailyWordCard}>
          <Text style={styles.dailyWordTitle}>WORD OF THE DAY</Text>
          <Text style={styles.dailyWord}>Whānau</Text>
          <Text style={styles.dailyWordTranslation}>Family, extended family</Text>
        </View>

        <Text style={styles.sectionTitle}>Continue Learning</Text>
        <TouchableOpacity onPress={continueLesson}>
          <LessonCard
            title="Basic Greetings"
            description="Learn common Māori greetings and introductions"
            progress={0.4}
            image="https://images.pexels.com/photos/5605061/pexels-photo-5605061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Recommended for You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.lessonList}>
          <LessonCard
            title="Family Members"
            description="Learn words for family relationships"
            progress={0}
            image="https://images.pexels.com/photos/7879942/pexels-photo-7879942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            small
          />
          <LessonCard
            title="Basic Phrases"
            description="Everyday useful phrases"
            progress={0}
            image="https://images.pexels.com/photos/14035619/pexels-photo-14035619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            small
          />
          <LessonCard
            title="Numbers 1-10"
            description="Learn to count in Māori"
            progress={0}
            image="https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            small
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}