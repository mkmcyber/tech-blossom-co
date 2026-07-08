import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Plain Vite + React SPA configured for GitHub Pages.
// For project pages (https://USER.github.io/REPO/), build with
//   VITE_BASE_PATH=/REPO/ bun run build
// The GitHub Action in .github/workflows/deploy.yml does this automatically.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  define: {
    __BUILD_VERSION__: JSON.stringify(new Date().toISOString()),
  },
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    host: "::",
    port: 8080,
  },
});
