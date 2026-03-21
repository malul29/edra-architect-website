require('dotenv').config({ path: '.env.local' });
const { Client } = require('pg');
(async () => {
  const c = new Client({ connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL });
  await c.connect();
  const total = await c.query('select count(*)::int as n from media');
  const blob = await c.query("select count(*)::int as n from media where url like 'https://%.blob.vercel-storage.com/%'");
  const sample = await c.query("select id, filename, url from media order by id desc limit 5");
  console.log(JSON.stringify({ total: total.rows[0].n, blob: blob.rows[0].n, sample: sample.rows }, null, 2));
  await c.end();
})().catch((e)=>{ console.error(e.message); process.exit(1); });
