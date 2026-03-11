import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, service, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        // Try inserting into Payload CMS contact-submissions collection
        try {
            const { getPayload } = await import("payload");
            const payload = await getPayload({ config: (await import("@payload-config")).default });
            await payload.create({
                collection: "contact-submissions",
                data: { name, email, service: service || "", message },
            });
        } catch {
            // Table may not exist yet — log to server console as fallback
            console.log("=== NEW CONTACT SUBMISSION ===");
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Service: ${service || "-"}`);
            console.log(`Message: ${message}`);
            console.log("==============================");
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
