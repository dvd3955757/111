export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      lessons: {
        Row: {
          id: string
          title: string
          description: string | null
          level: string
          order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          level: string
          order: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          level?: string
          order?: number
          created_at?: string
          updated_at?: string
        }
      }
      lesson_contents: {
        Row: {
          id: string
          lesson_id: string
          type: 'word' | 'phrase' | 'quiz'
          content: Json
          order: number
          created_at: string
        }
        Insert: {
          id?: string
          lesson_id: string
          type: 'word' | 'phrase' | 'quiz'
          content: Json
          order: number
          created_at?: string
        }
        Update: {
          id?: string
          lesson_id?: string
          type?: 'word' | 'phrase' | 'quiz'
          content?: Json
          order?: number
          created_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          completed_at: string
          score: number | null
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          completed_at?: string
          score?: number | null
        }
        Update: {
          id?: string
          user_id?: string
          lesson_id?: string
          completed_at?: string
          score?: number | null
        }
      }
      user_streaks: {
        Row: {
          id: string
          user_id: string
          current_streak: number
          longest_streak: number
          last_activity_date: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          current_streak?: number
          longest_streak?: number
          last_activity_date?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          current_streak?: number
          longest_streak?: number
          last_activity_date?: string
          updated_at?: string
        }
      }
    }
  }
}