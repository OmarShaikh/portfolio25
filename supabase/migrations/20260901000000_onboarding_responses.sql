-- Client onboarding questionnaire answers. One row per client slug.
-- Run once in the Supabase SQL editor. Service role only (RLS on, no policies).
create table if not exists onboarding_responses (
  slug text primary key,
  answers jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table onboarding_responses enable row level security;
