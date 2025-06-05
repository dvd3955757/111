# Māori Learning Platform Backend Setup

This repository contains migrations and configuration for a Supabase backend used by the mobile app and admin CMS.

## Running Supabase locally

1. Install the [Supabase CLI](https://supabase.com/docs/guides/cli).
2. Initialize the project:
   ```bash
   supabase start
   ```
   This launches the local stack using Docker.
3. Apply database migrations:
   ```bash
   supabase db reset
   ```
   The migrations under `project/supabase/migrations` will be executed.

The default configuration expects the database to be available at `localhost:54322`. If you change the ports, update `project/supabase/config.toml`.

## Environment variables

The mobile app reads the following values:

- `EXPO_PUBLIC_SUPABASE_URL` – API URL
- `EXPO_PUBLIC_SUPABASE_ANON_KEY` – anon key for the public API

For admin access, use a service role key and pass it to your CMS application.

