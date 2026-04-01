import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";
import BodyWrapper from "../../components/BodyWrapper";

export const metadata = {
    metadataBase: new URL("https://edraarsitek.co.id"),
    title: "Edra Arsitek Indonesia",
    description: "Edra Arsitek Indonesia - Architecture & Interior Design",
    icons: {
        icon: "/favivon.png",
        shortcut: "/favivon.png",
        apple: "/favivon.png",
    },
};

export const revalidate = 60;

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <BodyWrapper>{children}</BodyWrapper>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
