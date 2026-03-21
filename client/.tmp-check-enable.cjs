const fs = require('fs');
const dotenv = require('dotenv');
const env = dotenv.parse(fs.readFileSync('.env.local','utf8'));
const raw = env.ENABLE_BLOB_STORAGE;
console.log('ENABLE_BLOB_STORAGE raw JSON =', JSON.stringify(raw));
