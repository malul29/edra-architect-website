// Server Component — fetches all blog data at request time via Payload SDK
import config from "@/payload.config";
import { getPayload } from "payload";
import BlogsClient from "./BlogsClient";

export const metadata = {
    title: "Blog — EDRA Arsitek Indonesia",
    description: "Design thinking, project process, and architecture insights from PT. EDRA Arsitek Indonesia.",
};

export default async function BlogsPage() {
    let blogs = [];
    try {
        const payload = await getPayload({ config });
        const blogsRes = await payload.find({ collection: "blogs", limit: 50, depth: 1, sort: "-date" });
        blogs = blogsRes.docs || [];
    } catch (err) {
        console.error("[BlogsPage] Failed to load CMS data:", err?.message);
    }
    return <BlogsClient initialBlogs={blogs} />;
}

