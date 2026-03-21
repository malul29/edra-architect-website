const { Client } = require('pg');
const src = 'postgresql://neondb_owner:npg_aOjlbXFxw7z3@ep-sweet-bar-a15uqous-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';
(async () => {
  const c = new Client({ connectionString: src });
  await c.connect();
  const t = await c.query("select table_name from information_schema.tables where table_schema='public' and table_name like 'portfolio%' order by table_name");
  console.log(t.rows.map(r=>r.table_name).join('\n'));
  await c.end();
})().catch((e)=>{ console.error(e); process.exit(1); });
