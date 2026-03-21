require('dotenv').config();
const { Client } = require('pg');
(async () => {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();
  const q = 'select p.id, p.title, m.id as media_id, m.filename, m.url from portfolio p left join media m on p.image_id = m.id order by p.id desc limit 20';
  const r = await c.query(q);
  console.log('rows', r.rows.length);
  for (const row of r.rows) {
    console.log(`${row.id} | ${row.title} | media:${row.media_id} | ${row.filename} | ${row.url}`);
  }
  await c.end();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
