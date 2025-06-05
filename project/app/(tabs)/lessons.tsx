import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/theme/ThemeContext';
import { useRouter } from 'expo-router';
import { LessonCard } from '@/components/LessonCard';
import { lessonData } from '@/data/lessonData';
import { Filter } from 'lucide-react-native';

export default function LessonsScreen() {
  const { colors, spacing } = useTheme();
  const router = useRouter();
  
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontFamily: 'Inter-Bold',
      fontSize: 28,
      color: colors.text,
    },
    filterButton: {
      padding: spacing.sm,
      borderRadius: 8,
      backgroundColor: colors.card,
    },
    sectionTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: colors.text,
      marginTop: spacing.md,
      marginBottom: spacing.sm,
      paddingHorizontal: spacing.md,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginVertical: spacing.md,
      marginHorizontal: spacing.md,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: spacing.md,
      marginTop: spacing.md,
    },
    seeAll: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      color: colors.primary,
    },
    categoryContainer: {
      flexDirection: 'row',
      paddingHorizontal: spacing.md,
      marginBottom: spacing.md,
      marginTop: spacing.sm,
    },
    categoryButton: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      borderRadius: 20,
      marginRight: spacing.sm,
      borderWidth: 1,
    },
    categoryText: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
    },
    categoryActive: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    categoryInactive: {
      backgroundColor: 'transparent',
      borderColor: colors.border,
    },
    categoryTextActive: {
      color: colors.white,
    },
    categoryTextInactive: {
      color: colors.text,
    },
  });

  const navigateToLesson = (id: string) => {
    router.push(`/lessons/${id}`);
  };

  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Cultural'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Lessons</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.categoryButton, 
                index === 0 ? styles.categoryActive : styles.categoryInactive
              ]}
            >
              <Text 
                style={[
                  styles.categoryText, 
                  index === 0 ? styles.categoryTextActive : styles.categoryTextInactive
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Beginner</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {lessonData.filter(lesson => lesson.level === 'Beginner').map((lesson) => (
          <TouchableOpacity key={lesson.id} onPress={() => navigateToLesson(lesson.id)}>
            <LessonCard
              title={lesson.title}
              description={lesson.description}
              progress={lesson.progress}
              image={lesson.image}
            />
          </TouchableOpacity>
        ))}

        <View style={styles.divider} />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Intermediate</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {lessonData.filter(lesson => lesson.level === 'Intermediate').map((lesson) => (
          <TouchableOpacity key={lesson.id} onPress={() => navigateToLesson(lesson.id)}>
            <LessonCard
              title={lesson.title}
              description={lesson.description}
              progress={lesson.progress}
              image={lesson.image}
            />
          </TouchableOpacity>
        ))}

        <View style={styles.divider} />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cultural</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {lessonData.filter(lesson => lesson.level === 'Cultural').map((lesson) => (
          <TouchableOpacity key={lesson.id} onPress={() => navigateToLesson(lesson.id)}>
            <LessonCard
              title={lesson.title}
              description={lesson.description}
              progress={lesson.progress}
              image={lesson.image}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}