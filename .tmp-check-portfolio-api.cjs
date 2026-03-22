(async () => {
  const u = 'https://edraarsitek.co.id/api/portfolio?limit=5&depth=0';
  const r = await fetch(u);
  const t = await r.text();
  console.log('STATUS', r.status);
  console.log(t.slice(0, 800));
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
