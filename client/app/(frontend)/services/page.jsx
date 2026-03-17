// Server Component — fetches data at request time via Payload SDK
import config from "@/payload.config";
import { getPayload } from "payload";
import { fallbackServices } from "@/lib/fallbackData";
import ServicesClient from "./ServicesClient";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Our Services — EDRA Arsitek Indonesia",
    description: "Architecture design, interior design, project management and construction services by PT. EDRA Arsitek Indonesia.",
};

export default async function ServicesPage() {
    const payload = await getPayload({ config });

    const servicesRes = await payload.find({
        collection: "services",
        limit: 20,
        depth: 1,
    });

    const services = servicesRes.docs.length > 0 ? servicesRes.docs : fallbackServices;

    return <ServicesClient services={services} />;
}
