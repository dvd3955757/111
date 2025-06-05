/*
  # Initial Schema Setup for Māori Language Learning Platform

  1. New Tables
    - `lessons`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `level` (text)
      - `order` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `lesson_contents`
      - `id` (uuid, primary key)
      - `lesson_id` (uuid, foreign key)
      - `type` (text) - 'word', 'phrase', or 'quiz'
      - `content` (jsonb)
      - `order` (integer)
      - `created_at` (timestamp)

    - `user_progress`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `lesson_id` (uuid, foreign key)
      - `completed_at` (timestamp)
      - `score` (integer)

    - `user_streaks`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `current_streak` (integer)
      - `longest_streak` (integer)
      - `last_activity_date` (date)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create lessons table
CREATE TABLE IF NOT EXISTS lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  level text NOT NULL,
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;

-- Create lesson_contents table
CREATE TABLE IF NOT EXISTS lesson_contents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid REFERENCES lessons(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('word', 'phrase', 'quiz')),
  content jsonb NOT NULL,
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE lesson_contents ENABLE ROW LEVEL SECURITY;

-- Create user_progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id uuid REFERENCES lessons(id) ON DELETE CASCADE,
  completed_at timestamptz DEFAULT now(),
  score integer CHECK (score >= 0 AND score <= 100),
  UNIQUE(user_id, lesson_id)
);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Create user_streaks table
CREATE TABLE IF NOT EXISTS user_streaks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  current_streak integer DEFAULT 0,
  longest_streak integer DEFAULT 0,
  last_activity_date date DEFAULT CURRENT_DATE,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_streaks ENABLE ROW LEVEL SECURITY;

-- Create RLS policies

-- Lessons policies
CREATE POLICY "Lessons are viewable by everyone"
  ON lessons FOR SELECT
  USING (true);

CREATE POLICY "Only admins can insert lessons"
  ON lessons FOR INSERT
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Only admins can update lessons"
  ON lessons FOR UPDATE
  USING (auth.jwt() ->> 'role' = 'admin');

-- Lesson contents policies
CREATE POLICY "Lesson contents are viewable by everyone"
  ON lesson_contents FOR SELECT
  USING (true);

CREATE POLICY "Only admins can insert lesson contents"
  ON lesson_contents FOR INSERT
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Only admins can update lesson contents"
  ON lesson_contents FOR UPDATE
  USING (auth.jwt() ->> 'role' = 'admin');

-- User progress policies
CREATE POLICY "Users can view their own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- User streaks policies
CREATE POLICY "Users can view their own streaks"
  ON user_streaks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own streaks"
  ON user_streaks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own streaks"
  ON user_streaks FOR UPDATE
  USING (auth.uid() = user_id);

-- Create function to update user streaks
CREATE OR REPLACE FUNCTION update_user_streak()
RETURNS TRIGGER AS $$
BEGIN
  -- Get or create user streak record
  INSERT INTO user_streaks (user_id)
  VALUES (NEW.user_id)
  ON CONFLICT (user_id) DO NOTHING;

  -- Update streak
  WITH streak_data AS (
    SELECT
      user_id,
      CASE
        WHEN last_activity_date = CURRENT_DATE - INTERVAL '1 day'
        THEN current_streak + 1
        WHEN last_activity_date = CURRENT_DATE
        THEN current_streak
        ELSE 1
      END as new_streak
    FROM user_streaks
    WHERE user_id = NEW.user_id
  )
  UPDATE user_streaks us
  SET
    current_streak = sd.new_streak,
    longest_streak = GREATEST(longest_streak, sd.new_streak),
    last_activity_date = CURRENT_DATE,
    updated_at = now()
  FROM streak_data sd
  WHERE us.user_id = sd.user_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updating streaks
CREATE TRIGGER update_user_streak_on_progress
  AFTER INSERT ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_user_streak();
