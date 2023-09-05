import dotenv from "dotenv"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"
import svgr from "vite-plugin-svgr"

// Load build time envs
dotenv.config({ path: ".env.buildtime" })

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            plugins: [
                [
                    "@swc/plugin-styled-components",
                    {
                        displayName: true,
                        minify: true,
                    },
                ],
            ],
        }),
        tsconfigPaths(),
        svgr(),
    ],
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
    },
    server: {
        port: 3000,
    },
    test: {
        globals: true,
        clearMocks: true,
        environment: "jsdom",
        setupFiles: ["whatwg-fetch", "modules/shared/config/tests/setupTests.ts"],
    },
})
