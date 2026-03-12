-- =============================================
-- Admin Users (fixed accounts, no registration UI)
-- =============================================
create table if not exists admin_users (
  id          uuid primary key default gen_random_uuid(),
  username    text unique not null,
  password    text not null, -- bcrypt hash
  created_at  timestamptz default now()
);

-- =============================================
-- Admin Sessions
-- =============================================
create table if not exists admin_sessions (
  id          uuid primary key default gen_random_uuid(),
  admin_id    uuid references admin_users(id) on delete cascade,
  token       text unique not null,
  expires_at  timestamptz not null,
  created_at  timestamptz default now()
);

-- =============================================
-- Portfolio Items
-- =============================================
create table if not exists portfolio_items (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  slug          text unique not null,
  description   text,
  thumbnail_url text,
  images        text[] default '{}',
  tags          text[] default '{}',
  sort_order    integer default 0,
  is_published  boolean default false,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- =============================================
-- Case Studies
-- =============================================
create table if not exists case_studies (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  slug            text unique not null,
  summary         text,
  content         text,
  thumbnail_url   text,
  client          text,
  industry        text,
  tags            text[] default '{}',
  is_featured     boolean default false,
  is_published    boolean default false,
  sort_order      integer default 0,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- =============================================
-- Auto-update updated_at
-- =============================================
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger portfolio_items_updated_at
  before update on portfolio_items
  for each row execute function update_updated_at();

create trigger case_studies_updated_at
  before update on case_studies
  for each row execute function update_updated_at();

-- =============================================
-- Seed: default admin account
-- password: admin1234  (bcrypt hash below)
-- CHANGE THIS PASSWORD after first login via DB
-- =============================================
insert into admin_users (username, password)
values (
  'admin',
  '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi' -- password: "password" (change this!)
)
on conflict (username) do nothing;
