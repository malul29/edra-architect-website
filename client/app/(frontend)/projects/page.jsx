// Server Component — fetches all portfolio data at request time via Payload SDK
import config from "@/payload.config";
import { getPayload } from "payload";
import ProjectsClient from "./ProjectsClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
    title: "Projects — EDRA Arsitek Indonesia",
    description: "Explore our portfolio of architecture, interior design, and construction projects across Indonesia.",
};

export default async function ProjectsPage() {
    let projects = [];
    try {
        const payload = await getPayload({ config });
        const portfolioRes = await payload.find({ collection: "portfolio", limit: 200, depth: 1, sort: "-createdAt" });
        projects = portfolioRes.docs || [];
    } catch (err) {
        console.error("[ProjectsPage] Failed to load CMS data:", err?.message);
    }
    return <ProjectsClient initialData={projects} />;
}
