require('dotenv').config({ path: '.env' });
const { Client } = require('pg');

(async () => {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();

  const count = await c.query('select count(*)::int as n from portfolio');
  console.log('PORTFOLIO_ROWS', count.rows[0].n);

  const cols = await c.query("select column_name from information_schema.columns where table_name='portfolio' order by ordinal_position");
  console.log('COLUMNS', cols.rows.map((x) => x.column_name).join(','));

  await c.end();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
