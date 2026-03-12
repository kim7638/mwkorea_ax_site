-- Add missing fields to portfolio_items
alter table portfolio_items
  add column if not exists client          text,
  add column if not exists industry        text,
  add column if not exists year            integer,
  add column if not exists overview        text,
  add column if not exists short_description text;

-- Add missing fields to case_studies
alter table case_studies
  add column if not exists hero_image  text,
  add column if not exists year        integer,
  add column if not exists problem     text,
  add column if not exists approach    text,
  add column if not exists solution    text,
  add column if not exists outcome     text;
