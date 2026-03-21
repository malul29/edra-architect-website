require('dotenv').config({ path: '.env.local' });
const { Client } = require('pg');
(async () => {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();
  const media = await c.query('select count(*)::int as n from media');
  const portfolio = await c.query('select count(*)::int as n from portfolio');
  console.log(JSON.stringify({ media: media.rows[0].n, portfolio: portfolio.rows[0].n }, null, 2));
  await c.end();
})().catch((e)=>{ console.error('DB_CHECK_ERROR', e.message); process.exit(1); });
