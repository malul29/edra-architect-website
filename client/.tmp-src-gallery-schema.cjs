const { Client } = require('pg');
const src = 'postgresql://neondb_owner:npg_aOjlbXFxw7z3@ep-sweet-bar-a15uqous-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';
(async () => {
  const c = new Client({ connectionString: src });
  await c.connect();
  const cols = await c.query("select column_name,data_type from information_schema.columns where table_schema='public' and table_name='portfolio_gallery' order by ordinal_position");
  for (const r of cols.rows) console.log(`${r.column_name} (${r.data_type})`);
  const count = await c.query('select count(*)::int as n from portfolio_gallery');
  console.log('rows', count.rows[0].n);
  await c.end();
})().catch((e)=>{ console.error(e); process.exit(1); });
