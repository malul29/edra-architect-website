// Server Component — fetches all portfolio data at request time via Payload SDK
import config from "@/payload.config";
import { getPayload } from "payload";
import ProjectsClient from "./ProjectsClient";

export const metadata = {
    title: "Projects — EDRA Arsitek Indonesia",
    description: "Explore our portfolio of architecture, interior design, and construction projects across Indonesia.",
};

export default async function ProjectsPage() {
    const payload = await getPayload({ config });

    const portfolioRes = await payload.find({
        collection: "portfolio",
        limit: 200,
        depth: 1,
        sort: "-createdAt",
    });

    const projects = portfolioRes.docs || [];

    return <ProjectsClient initialData={projects} />;
}
