import dotenv from 'dotenv';
import { getPayload } from 'payload';

dotenv.config({ path: '.env.local' });
const { default: config } = await import('./payload.config.ts');
const payload = await getPayload({ config });
const media = await payload.find({ collection: 'media', limit: 1, depth: 0, pagination: true, overrideAccess: true });
console.log('init-ok total media:', media.totalDocs ?? media.docs.length);
process.exit(0);
