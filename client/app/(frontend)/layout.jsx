import { Archivo } from "next/font/google";
import "../globals.css";
import BodyWrapper from "../../components/BodyWrapper";

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
    variable: "--font-archivo",
});

export const metadata = {
    title: "Edra Arsitek Indonesia",
    description: "Edra Arsitek Indonesia - Architecture & Interior Design",
    icons: {
        icon: "/edra-logo.png",
        apple: "/edra-logo.png",
    },
};

export const revalidate = 60;

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={archivo.variable}>
            <body>
                <BodyWrapper>{children}</BodyWrapper>
            </body>
        </html>
    );
}
