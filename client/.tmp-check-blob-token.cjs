const fs = require('fs');
const dotenv = require('dotenv');
(async () => {
  const envMain = dotenv.parse(fs.readFileSync('.env', 'utf8'));
  const envLocal = dotenv.parse(fs.readFileSync('.env.local', 'utf8'));
  const { put } = await import('@vercel/blob');

  async function check(label, token) {
    if (!token) return console.log(label + ': missing');
    try {
      await put(`probe/${Date.now()}-${label}.txt`, Buffer.from('probe'), {
        token,
        access: 'public',
        addRandomSuffix: true,
        contentType: 'text/plain',
      });
      console.log(label + ': public-ok');
    } catch (e) {
      const msg = String(e && e.message || e);
      if (msg.includes('Cannot use public access on a private store')) {
        console.log(label + ': private-store');
      } else {
        console.log(label + ': failed ' + msg.slice(0, 120));
      }
    }
  }

  await check('token-from-.env', envMain.BLOB_READ_WRITE_TOKEN || envMain.VERCEL_BLOB_READ_WRITE_TOKEN);
  await check('token-from-.env.local', envLocal.BLOB_READ_WRITE_TOKEN || envLocal.VERCEL_BLOB_READ_WRITE_TOKEN);
})();
