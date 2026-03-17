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
    const payload = await getPayload({ config });

    // Fetch portfolio - only need a few for the hero carousel
    const portfolioRes = await payload.find({
        collection: "portfolio",
        limit: 10,
        sort: "-createdAt",
    });

    // Fetch services
    const servicesRes = await payload.find({
        collection: "services",
        limit: 10,
    });

    const portfolio = portfolioRes.docs || [];
    const services = servicesRes.docs.length > 0 ? servicesRes.docs : fallbackServices;

    return <HomeClient initialPortfolio={portfolio} initialServices={services} />;
}

