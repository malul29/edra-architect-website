const fs = require('fs');
(async () => {
  const bytes = fs.readFileSync('d:/web-edra/client/public/media/AL WILDAN.jpg');
  const form = new FormData();
  form.append('alt', 'upload-test');
  form.append('file', new Blob([bytes], { type: 'image/jpeg' }), 'AL WILDAN.jpg');
  const res = await fetch('https://edraarsitek.co.id/api/media', { method: 'POST', body: form });
  const text = await res.text();
  console.log('STATUS', res.status);
  console.log(text.slice(0, 400));
})().catch((e)=>{ console.error(e); process.exit(1); });
