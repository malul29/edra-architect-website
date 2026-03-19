// This is a Server Component
import config from "@/payload.config";
import { getPayload } from "payload";
import HomeClient from "./HomeClient";
import { fallbackServices } from "@/lib/fallbackData";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Edra Arsitek Indonesia",
    description: "Edra Arsitek Indonesia - Innovative & Inspiring Design Solutions",
};

export default async function Home() {
    let portfolio = [];
    let services = fallbackServices;
    try {
        const payload = await getPayload({ config });
        const portfolioRes = await payload.find({ collection: "portfolio", limit: 10, sort: "-createdAt", depth: 1 });
        portfolio = portfolioRes.docs || [];
    } catch (err) {
        console.error("[Home] Failed to load CMS data:", err?.message);
    }
    return <HomeClient initialPortfolio={portfolio} initialServices={services} />;
}

