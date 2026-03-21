(async () => {
  for (const url of ['https://edraarsitek.co.id/vercel-blob-client-upload-route','https://edraarsitek.co.id/api/vercel-blob-client-upload-route']) {
    const res = await fetch(url, { method: 'POST', headers: {'content-type':'application/json'}, body: '{}' });
    console.log(url, res.status);
  }
})().catch((e)=>{ console.error(e); process.exit(1); });
