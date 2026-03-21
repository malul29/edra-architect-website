require('dotenv').config({ path: '.env' });
const { Client } = require('pg');
(async () => {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();
  const a = await c.query('select count(*)::int as n from media');
  const b = await c.query('select count(*)::int as n from portfolio');
  console.log('media', a.rows[0].n, 'portfolio', b.rows[0].n);
  await c.end();
})().catch((e)=>{ console.error(e); process.exit(1); });
