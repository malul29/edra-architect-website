import { Archivo } from "next/font/google";
import "../globals.css";
import BodyWrapper from "../../components/BodyWrapper";

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
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

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={archivo.variable}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </head>
            <body>
                <BodyWrapper>{children}</BodyWrapper>
            </body>
        </html>
    );
}
