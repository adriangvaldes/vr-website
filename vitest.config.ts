import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["node_modules", "out"],
    alias: {
      "next/image": new URL("./src/test/__mocks__/next/image.tsx", import.meta.url).pathname,
      "next/link":  new URL("./src/test/__mocks__/next/link.tsx",  import.meta.url).pathname,
    },
  },
});
