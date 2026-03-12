-- =============================================
-- Supabase Storage: media bucket
-- Run this in Supabase SQL editor
-- =============================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

-- Allow public read
create policy "Public media read"
  on storage.objects for select
  using (bucket_id = 'media');

-- Allow authenticated service role to upload
create policy "Service role upload"
  on storage.objects for insert
  with check (bucket_id = 'media');

create policy "Service role delete"
  on storage.objects for delete
  using (bucket_id = 'media');
