const fs = require('fs');
const lines = fs.readFileSync('.env','utf8').split(/\r?\n/);
const db = lines.find(l=>l.startsWith('DATABASE_URL='))?.slice('DATABASE_URL='.length);
if(!db){ throw new Error('DATABASE_URL not found in .env'); }
const { spawnSync } = require('child_process');
const cmd = 'npx';
const args = ['vercel','env','add','DATABASE_URL','production'];
const res = spawnSync(cmd,args,{ input: db + '\n', encoding:'utf8' });
process.stdout.write(res.stdout || '');
process.stderr.write(res.stderr || '');
process.exit(res.status ?? 0);
