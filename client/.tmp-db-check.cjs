require('dotenv').config({ path: '.env' });
const { Client } = require('pg');
(async () => {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();
  const r = await c.query('select now() as now');
  console.log('connected', !!r.rows?.length, r.rows[0]?.now);
  await c.end();
})().catch((e)=>{ console.error('DB_CONNECT_ERROR', e.message); process.exit(1); });
