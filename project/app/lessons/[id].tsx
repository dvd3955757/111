import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@/theme/ThemeContext';
import { lessonContents } from '@/data/lessonData';
import { ArrowLeft, Play, Volume as VolumeIcon } from 'lucide-react-native';
import { VocabCard } from '@/components/VocabCard';
import { QuizCard } from '@/components/QuizCard';
import { useState } from 'react';
import { Audio } from 'expo-av';

export default function LessonScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { colors, spacing } = useTheme();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  
  const lessonId = Array.isArray(id) ? id[0] : id || '1';
  const lesson = lessonContents.find(item => item.id === lessonId);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: spacing.md,
    },
    backButton: {
      padding: spacing.sm,
    },
    title: {
      fontFamily: 'Inter-Bold',
      fontSize: 24,
      color: colors.text,
      marginLeft: spacing.sm,
    },
    bannerImage: {
      width: '100%',
      height: 180,
    },
    contentContainer: {
      padding: spacing.md,
    },
    lessonTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 24,
      color: colors.text,
      marginBottom: spacing.xs,
    },
    lessonDescription: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: colors.textSecondary,
      marginBottom: spacing.md,
    },
    sectionTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: colors.text,
      marginTop: spacing.md,
      marginBottom: spacing.sm,
    },
    navigationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: spacing.md,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      backgroundColor: colors.background,
    },
    navigationButton: {
      flex: 1,
      padding: spacing.md,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: spacing.xs,
    },
    navigationButtonText: {
      fontFamily: 'Inter-Bold',
      fontSize: 16,
    },
    navigationPrevious: {
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border,
    },
    navigationNext: {
      backgroundColor: colors.primary,
    },
    prevButtonText: {
      color: colors.text,
    },
    nextButtonText: {
      color: colors.white,
    },
    lessonProgress: {
      height: 4,
      backgroundColor: colors.border,
      marginTop: spacing.sm,
      borderRadius: 2,
    },
    progressFill: {
      height: '100%',
      backgroundColor: colors.primary,
      borderRadius: 2,
    },
  });

  if (!lesson) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={styles.title}>Lesson not found</Text>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Text style={{ color: colors.primary, fontFamily: 'Inter-Medium' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const playSound = async (audioFile: string) => {
    try {
      // In a real app, this would play an actual audio file
      // For this demo, we're just simulating audio playback
      console.log(`Playing sound: ${audioFile}`);
      
      // Clean up any existing sound
      if (sound) {
        await sound.unloadAsync();
      }
      
      // This is just placeholder for demo purposes
      // In a real app, you would load and play actual audio files
      // const { sound: newSound } = await Audio.Sound.createAsync(
      //   require(`@/assets/audio/${audioFile}`)
      // );
      // setSound(newSound);
      // await newSound.playAsync();
    } catch (error) {
      console.error('Error playing sound', error);
    }
  };

  const navigateNext = () => {
    if (currentItemIndex < lesson.contents.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
    } else {
      // Lesson completed
      router.push('/practice');
    }
  };

  const navigatePrevious = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(currentItemIndex - 1);
    }
  };

  const renderContent = () => {
    const item = lesson.contents[currentItemIndex];
    
    if (item.type === 'word' || item.type === 'phrase') {
      return (
        <VocabCard
          text={item.text}
          translation={item.translation}
          image={item.image}
          example={item.example}
          onPlayAudio={() => playSound(item.audio)}
        />
      );
    } else if (item.type === 'quiz') {
      return (
        <QuizCard
          question={item.question}
          options={item.options}
          correctAnswer={item.answer}
          onAnswerSelected={navigateNext}
        />
      );
    }
    
    return null;
  };

  const progressPercentage = ((currentItemIndex + 1) / lesson.contents.length) * 100;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="auto" />
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: lesson.title,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <ArrowLeft size={24} color={colors.text} />
            </TouchableOpacity>
          ),
        }} 
      />
      
      <ScrollView>
        <Image 
          source={{ uri: lesson.bannerImage || 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
          style={styles.bannerImage}
          resizeMode="cover"
        />
        
        <View style={styles.contentContainer}>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
          <Text style={styles.lessonDescription}>{lesson.description}</Text>
          
          <View style={styles.lessonProgress}>
            <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
          </View>
          
          <Text style={styles.sectionTitle}>
            {currentItemIndex + 1} of {lesson.contents.length}
          </Text>
          
          {renderContent()}
        </View>
      </ScrollView>
      
      <View style={styles.navigationContainer}>
        <TouchableOpacity 
          style={[styles.navigationButton, styles.navigationPrevious]}
          onPress={navigatePrevious}
          disabled={currentItemIndex === 0}
        >
          <Text 
            style={[
              styles.navigationButtonText, 
              styles.prevButtonText,
              currentItemIndex === 0 ? { opacity: 0.5 } : {}
            ]}
          >
            Previous
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navigationButton, styles.navigationNext]}
          onPress={navigateNext}
        >
          <Text style={[styles.navigationButtonText, styles.nextButtonText]}>
            {currentItemIndex < lesson.contents.length - 1 ? 'Next' : 'Complete'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}