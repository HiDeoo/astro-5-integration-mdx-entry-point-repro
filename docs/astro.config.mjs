// @ts-check
import { defineConfig } from "astro/config";
import { testIntegration } from "@repro/integration";

// https://astro.build/config
export default defineConfig({
  integrations: [testIntegration()],
});
