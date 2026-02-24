"use client";
import { useState } from "react";
import IntroAnimation from "../components/IntroAnimation";

export default function BodyWrapper({ children }) {
    const [introPlaying, setIntroPlaying] = useState(true);
    return (
        <>
            {introPlaying && (
                <IntroAnimation onComplete={() => setIntroPlaying(false)} />
            )}
            <div style={{ visibility: introPlaying ? "hidden" : "visible" }}>
                {children}
            </div>
        </>
    );
}
