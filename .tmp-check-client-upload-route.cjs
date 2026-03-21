(async () => {
  const res = await fetch('https://edraarsitek.co.id/vercel-blob-client-upload-route', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({})
  });
  const text = await res.text();
  console.log('STATUS', res.status);
  console.log(text.slice(0, 300));
})().catch((e)=>{ console.error(e); process.exit(1); });
