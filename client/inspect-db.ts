import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config.ts'

async function run() {
    const payload = await getPayload({ config })
    const res = await payload.find({ collection: 'portfolio', depth: 1 })
    console.log(`Found ${res.docs.length} portfolio items`)
    for (const d of res.docs) {
        console.log(`- ${d.title}: image =`, typeof d.image === 'object' ? d.image?.filename : d.image)
    }
    process.exit(0)
}
run()
