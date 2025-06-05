import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/theme/ThemeContext';
import { Settings, User, Award, LogOut, Bell, Moon } from 'lucide-react-native';

export default function ProfileScreen() {
  const { colors, spacing, toggleTheme, isDark } = useTheme();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      flex: 1,
    },
    header: {
      alignItems: 'center',
      paddingTop: spacing.xl,
      paddingBottom: spacing.lg,
    },
    profilePicContainer: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: colors.card,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: spacing.md,
    },
    profileIcon: {
      backgroundColor: colors.primaryLight,
      padding: spacing.md,
      borderRadius: 50,
    },
    username: {
      fontFamily: 'Inter-Bold',
      fontSize: 24,
      color: colors.text,
      marginBottom: spacing.xs,
    },
    email: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: colors.textSecondary,
      marginBottom: spacing.sm,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: spacing.md,
    },
    statItem: {
      alignItems: 'center',
    },
    statValue: {
      fontFamily: 'Inter-Bold',
      fontSize: 20,
      color: colors.text,
    },
    statLabel: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      color: colors.textSecondary,
    },
    sectionTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: colors.text,
      marginTop: spacing.lg,
      marginBottom: spacing.sm,
      paddingHorizontal: spacing.md,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    menuIcon: {
      marginRight: spacing.md,
      width: 30,
    },
    menuText: {
      fontFamily: 'Inter-Medium',
      fontSize: 16,
      color: colors.text,
      flex: 1,
    },
    logoutButton: {
      marginTop: spacing.lg,
      marginHorizontal: spacing.md,
      padding: spacing.md,
      borderRadius: 12,
      backgroundColor: colors.error,
      alignItems: 'center',
      marginBottom: spacing.xl,
    },
    logoutText: {
      fontFamily: 'Inter-Bold',
      fontSize: 16,
      color: colors.white,
    },
    menuToggle: {
      width: 50,
      height: 24,
      borderRadius: 12,
      backgroundColor: isDark ? colors.primary : colors.border,
      marginRight: spacing.sm,
      padding: 2,
      justifyContent: 'center',
    },
    toggleCircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: colors.white,
      alignSelf: isDark ? 'flex-end' : 'flex-start',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profilePicContainer}>
            <User size={40} color={colors.primary} />
          </View>
          <Text style={styles.username}>John Doe</Text>
          <Text style={styles.email}>john.doe@example.com</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Days</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>156</Text>
            <Text style={styles.statLabel}>Words</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Lessons</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Preferences</Text>

        <TouchableOpacity style={styles.menuItem} onPress={toggleTheme}>
          <Moon size={24} color={colors.text} style={styles.menuIcon} />
          <Text style={styles.menuText}>Dark Mode</Text>
          <View style={styles.menuToggle}>
            <View style={styles.toggleCircle} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Bell size={24} color={colors.text} style={styles.menuIcon} />
          <Text style={styles.menuText}>Notifications</Text>
          <View style={[styles.menuToggle, { backgroundColor: colors.primary }]}>
            <View style={[styles.toggleCircle, { alignSelf: 'flex-end' }]} />
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Account</Text>

        <TouchableOpacity style={styles.menuItem}>
          <User size={24} color={colors.text} style={styles.menuIcon} />
          <Text style={styles.menuText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Award size={24} color={colors.text} style={styles.menuIcon} />
          <Text style={styles.menuText}>Achievements</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Settings size={24} color={colors.text} style={styles.menuIcon} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}