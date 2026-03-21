const fs = require('fs');
const txt = fs.readFileSync('.env.local','utf8');
const keys = txt.split(/\r?\n/).filter(Boolean).filter(l=>!l.startsWith('#')).map(l=>l.split('=')[0]);
console.log(keys.join('\n'));
