require('dotenv').config({ path: '.env' });
const { Client } = require('pg');
(async () => {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();
  const r = await c.query('select 1 as ok');
  console.log('DB_OK', r.rows[0].ok);
  await c.end();
})().catch((e)=>{ console.error(e.message); process.exit(1); });
