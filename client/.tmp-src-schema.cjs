const { Client } = require('pg');
const src = 'postgresql://neondb_owner:npg_aOjlbXFxw7z3@ep-sweet-bar-a15uqous-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';
(async () => {
  const c = new Client({ connectionString: src });
  await c.connect();
  const tables = ['media','portfolio','blogs'];
  for (const t of tables) {
    const cols = await c.query(`select column_name,data_type from information_schema.columns where table_schema='public' and table_name='${t}' order by ordinal_position`);
    console.log(`TABLE ${t}`);
    for (const r of cols.rows) console.log(`- ${r.column_name} (${r.data_type})`);
  }
  await c.end();
})().catch((e)=>{ console.error(e); process.exit(1); });
