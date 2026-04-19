// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Playfair Display",
            cssVariable: "--font-playfair-display",
        },
        {
            provider: fontProviders.fontsource(),
            name: "Fira Code",
            cssVariable: "--font-fira-code",
        }
    ]
});
