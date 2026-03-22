// This is a Server Component
import config from "@/payload.config";
import { getPayload } from "payload";
import HomeClient from "./HomeClient";
import { fallbackServices } from "@/lib/fallbackData";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Edra Arsitek Indonesia",
    description: "Edra Arsitek Indonesia - Innovative & Inspiring Design Solutions",
    openGraph: {
        title: "Edra Arsitek Indonesia",
        description: "Edra Arsitek Indonesia - Innovative & Inspiring Design Solutions",
        url: "https://edraarsitek.co.id",
        siteName: "Edra Arsitek Indonesia",
        images: [
            {
                url: "/hero.jpg",
                width: 1200,
                height: 630,
                alt: "Edra Arsitek Indonesia",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Edra Arsitek Indonesia",
        description: "Edra Arsitek Indonesia - Innovative & Inspiring Design Solutions",
        images: ["/hero.jpg"],
    },
};

export default async function Home() {
    let portfolio = [];
    let services = fallbackServices;
    try {
        const payload = await getPayload({ config });
        const portfolioRes = await payload.find({ collection: "portfolio", limit: 24, sort: "-createdAt", depth: 1 });
        portfolio = portfolioRes.docs || [];
    } catch (err) {
        console.error("[Home] Failed to load CMS data:", err?.message);
    }
    return <HomeClient initialPortfolio={portfolio} initialServices={services} />;
}

